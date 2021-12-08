<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";

  export let meetups;

  let favoritesOnly = false;

  $: filteredMeetups = favoritesOnly ? meetups.filter((m) => m.isFavorite) : meetups;

  const setFilter = (event) => {
    favoritesOnly = event.detail === 1;
  };
</script>

<section id="meetup-controls">
  <MeetupFilter on:select={setFilter} />
</section>
<section id="meetups">
  {#each filteredMeetups as meetup}
    <MeetupItem
      id={meetup.id}
      title={meetup.title}
      subtitle={meetup.subtitle}
      description={meetup.description}
      imageUrl={meetup.imageUrl}
      address={meetup.address}
      isFavorite={meetup.isFavorite}
      on:showdetails
      on:edit
    />
  {/each}
</section>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
