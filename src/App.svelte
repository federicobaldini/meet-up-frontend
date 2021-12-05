<script>
  import meetups from "./Meetups/meetups-store";
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";

  let loadedMeetups = meetups
  let editMode = null;

  const addMeetup = (event) => {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      address: event.detail.address,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      description: event.detail.description,
    };

    loadedMeetups = [...loadedMeetups, newMeetup];
    editMode = null;
  };

  const cancelEdit = () => {
    editMode = null;
  };

  const toggleFavorite = (event) => {
    const id = event.detail;
    const updatedMeetup = { ...loadedMeetups.find((m) => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = loadedMeetups.findIndex((m) => m.id === id);
    const updatedMeetups = [...loadedMeetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    loadedMeetups = updatedMeetups;
  };
</script>

<Header />
<main>
  <div class="meetup-controls">
    <Button on:click="{() => editMode = 'add'}">New Meetup</Button>
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save="{addMeetup}" on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid meetups={$meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
