<script>
  import Header from "./UI/Header.svelte";
  import MeetupItem from "./Meetups/MeetupItem.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 1 day",
      description: "In this meetup, we will have some experts that teach you how to code!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/640px-20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
      address: "20th Code Road, 43787 Los Angeles",
      contactEmail: "code@test.com"
    }
  ];
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>

<Header />
<section id="meetups">
  {#each meetups as meetup}
    <MeetupItem />
  {/each}
</section>


