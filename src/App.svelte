<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 1 day",
      address: "20th Code Road, 43787 Los Angeles",
      imageUrl:
        "https://a-static.besthdwallpaper.com/los-angeles-sfondo-3000x2000-2663_42.jpg",
      contactEmail: "code@test.com",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      isFavorite: false,
    },
  ];
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

    meetups = [...meetups, newMeetup];
    editMode = null;
  };

  const toggleFavorite = (event) => {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find((m) => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex((m) => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  };
</script>

<Header />
<main>
  <div class="meetup-controls">
    <Button caption="New Meetup" on:click="{() => editMode = 'add'}" />
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save="{addMeetup}" />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
