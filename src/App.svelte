<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 1 day",
      description: "In this meetup, we will have some experts that teach you how to code!",
      imageUrl: "https://a-static.besthdwallpaper.com/los-angeles-sfondo-3000x2000-2663_42.jpg",
      address: "20th Code Road, 43787 Los Angeles",
      contactEmail: "code@test.com"
    }
  ];
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />
<main>
  <MeetupGrid meetups={meetups} />
</main>


