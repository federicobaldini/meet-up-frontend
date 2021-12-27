<script context="module">
  export const load = async ({ page, fetch, session, stuff }) => {
    try {
      const res = await fetch(
        "https://svelte-meet-up-project-default-rtdb.firebaseio.com/meetups.json"
      );
      if (!res.ok) {
        return {
          error: new Error("Fetching meetups failed, please try again later!"),
        };
      }
      const data = await res.json();
      const fetchedMeetups = [];
      for (const key in data) {
        fetchedMeetups.push({
          ...data[key],
          id: key,
        });
      }
      return { props: { fetchedMeetups: fetchedMeetups.reverse() } };
    } catch (err) {
      isLoading = false;
      return {
        error: new Error("Could not fetch meetups!"),
      };
    }
  };
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import meetups from "../Store/meetups-store";
  import MeetupItem from "../components/Meetup/MeetupItem.svelte";
  import MeetupFilter from "../components/Meetup/MeetupFilter.svelte";
  import Button from "../components/UI/Button.svelte";
  import EditMeetup from "../components/Meetup/EditMeetup.svelte";
  import LoadingSpinner from "../components/UI/LoadingSpinner.svelte";
  import Error from "../components/UI/Error.svelte";

  export let fetchedMeetups;

  let editMode;
  let editedId;
  let isLoading;
  let unsubscribe;
  let error;

  let favoritesOnly = false;

  $: filteredMeetups = favoritesOnly
    ? fetchedMeetups.filter((m) => m.isFavorite)
    : fetchedMeetups;

  onMount(() => {
    meetups.setMeetups(fetchedMeetups);
    unsubscribe = meetups.subscribe((items) => {
      fetchedMeetups = items;
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

  const throwError = (event) => {
    error = event.detail;
  };

  const clearError = () => {
    error = null;
  };

  const startAdd = () => {
    editMode = "edit";
  };
</script>

<svelte:head>
  <title>Meetups Home</title>
</svelte:head>

{#if error}
  <Error message={error.message} on:cancel={clearError} />
{/if}
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
    <Button on:click={startAdd}>New Meetup</Button>
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
