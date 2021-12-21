<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import meetups from "../Store/meetups-store";
  import MeetupItem from "../components/Meetup/MeetupItem.svelte";
  import MeetupFilter from "../components/Meetup/MeetupFilter.svelte";
  import Button from "../components/UI/Button.svelte";
  import EditMeetup from "../components/Meetup/EditMeetup.svelte";
  import LoadingSpinner from "../components/UI/LoadingSpinner.svelte";

  let fetchedMeetups = [];
  let editMode;
  let editedId;
  let isLoading;
  let unsubscribe;

  const dispatch = createEventDispatcher();

  let favoritesOnly = false;

  $: filteredMeetups = favoritesOnly
    ? fetchedMeetups.filter((m) => m.isFavorite)
    : fetchedMeetups;

  onMount(() => {
    unsubscribe = meetups.subscribe((items) => (fetchedMeetups = items));
    isLoading = true;
    fetch(
      "https://svelte-meet-up-project-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        if (!res.ok) {
          error = {
            message: "Fetching meetups failed, please try again later!",
          };
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
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  const setFilter = (event) => {
    favoritesOnly = event.detail === 1;
  };

  const savedMeetup = () => {
    editMode = null;
    editedId = null;
  };

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };

  const startEdit = (event) => {
    editMode = "edit";
    editedId = event.detail;
  };

  const showDetails = (event) => {
    page = "details";
    pageData.id = event.detail;
  };

  const closeDetails = () => {
    page = "overview";
    pageData = {};
  };

  const throwError = (event) => {
    error = event.detail;
  };

  const clearError = () => {
    error = null;
  };
</script>

<svelte:head>
  <title>All Meetups</title>
</svelte:head>

{#if editMode === "edit"}
  <EditMeetup
    id={editedId}
    on:save={savedMeetup}
    on:cancel={cancelEdit}
    on:error={throwError}
  />
{/if}
{#if isLoading}
  <LoadingSpinner />
{:else}
  <section id="meetup-controls">
    <MeetupFilter on:select={setFilter} />
    <Button on:click={() => dispatch("edit")}>New Meetup</Button>
  </section>
  {#if filteredMeetups.length === 0}
    <p id="no-meetups">No meetups found, you can start adding some.</p>
  {/if}
  <section id="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
      <div transition:scale animate:flip={{ duration: 300 }}>
        <MeetupItem
          id={meetup.id}
          title={meetup.title}
          subtitle={meetup.subtitle}
          description={meetup.description}
          imageUrl={meetup.imageUrl}
          address={meetup.address}
          isFavorite={meetup.isFavorite}
          on:showdetails={showDetails}
          on:edit={startEdit}
          on:error={throwError}
        />
      </div>
    {/each}
  </section>
{/if}

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  #no-meetups {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
