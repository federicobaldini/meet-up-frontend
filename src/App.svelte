<script>
  import meetups from "./Meetups/meetups-store";
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";
  import LoadingSpinner from "./UI/LoadingSpinner.svelte";
  import Error from "./UI/Error.svelte";

  let editMode = null;
  let editedId;
  let page = "overview";
  let pageData = { id: 0 };
  let isLoading = true;
  let error;

  fetch(
    "https://svelte-meet-up-project-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((res) => {
      if (!res.ok) {
        error = {message: "Fetching meetups failed, please try again later!"};
      }
      return res.json();
    })
    .then((data) => {
      const loadedMeetups = [];
      for (const key in data) {
        loadedMeetups.push({
          ...data[key],
          id: key,
        });
      }
      setTimeout(() => {
        isLoading = false;
        meetups.setMeetup(loadedMeetups.reverse());
      }, 1000);
    })
    .catch((err) => {
      error = err;
      isLoading = false;
      console.log(err);
    });

  const savedMeetup = () => {
    editMode = null;
    editedId = null;
  };

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };

  const showDetails = (event) => {
    page = "details";
    pageData.id = event.detail;
  };

  const closeDetails = () => {
    page = "overview";
    pageData = {};
  };

  const startEdit = (event) => {
    editMode = "edit";
    editedId = event.detail;
  };

  const throwError = (event) => {
    error = event.detail;
  };

  const clearError = () => {
    error = null;
  };
</script>

{#if error}
  <Error message={error.message} on:cancel={clearError} />
{/if}
<Header />
<main>
  {#if page === "overview"}
    {#if editMode === "edit"}
      <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit} on:error={throwError} />
    {/if}
    {#if isLoading}
      <LoadingSpinner />
    {:else}
      <!-- with this (store) bind it isn't necessary call the subscribe and unsubscribe method -->
      <!-- https://svelte.dev/tutorial/auto-subscriptions -->
      <MeetupGrid
        meetups={$meetups}
        on:showdetails={showDetails}
        on:edit={startEdit}
        on:error={throwError}
      />
    {/if}
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
