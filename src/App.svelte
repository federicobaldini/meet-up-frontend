<script>
  import meetups from "./Meetups/meetups-store";
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

  let editMode = null;
  let page = "overview";
  let pageData = {id: 0};

  const addMeetup = () => {
    editMode = null;
  };

  const cancelEdit = () => {
    editMode = null;
  };

  const showDetails = (event) => {
    page = "details";
    pageData.id = event.detail;
  };

  const closeDetails = () => {
    page = "overview";
    pageData = {};
  };
</script>

<Header />
<main>
  {#if page === "overview"}
    <div class="meetup-controls">
      <Button on:click={() => (editMode = "add")}>New Meetup</Button>
    </div>
    {#if editMode === "add"}
      <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <!-- with this (store) bind it isn't necessary call the subscribe and unsubscribe method -->
    <!-- https://svelte.dev/tutorial/auto-subscriptions -->
    <MeetupGrid meetups={$meetups} on:showdetails={showDetails} />
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
