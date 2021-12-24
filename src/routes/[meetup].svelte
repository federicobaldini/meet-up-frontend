<script context="module">
  export function preload(page) {
    const meetupId = page.params.meetup;

    return this.fetch(
      "https://svelte-meet-up-project-default-rtdb.firebaseio.com/meetups/" +
        meetupId +
        ".json"
    )
      .then((res) => {
        if (!res.ok) {
          error = {
            message: "Fetching meetup failed, please try again later!",
          };
        }
        return res.json();
      })
      .then((data) => {
        return { loadedMeetup: { ...data, id: meetupId } };
      })
      .catch((err) => {
        this.error(404, "Could not fetch meetup!");
      });
  }
</script>

<script>
  import Button from "../components/UI/Button.svelte";

  export let loadedMeetup;
</script>

<section>
  <div class="image">
    <img src={loadedMeetup.imageUrl} alt={loadedMeetup.title} />
  </div>
  <div class="content">
    <h1>{loadedMeetup.title}</h1>
    <h2>{loadedMeetup.subtitle} - {loadedMeetup.address}</h2>
    <p>{loadedMeetup.description}</p>
    <Button href="mailto:{loadedMeetup.contactEmail}">Contact</Button>
    <Button mode="outline" href="/">Close</Button>
  </div>
</section>

<style>
  section {
    margin-top: 4rem;
  }

  .image {
    width: 100%;
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image {
    background: #e7e7e7;
  }

  .content {
    text-align: center;
    width: 80%;
    margin: auto;
  }

  h1 {
    font-size: 2rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
  }

  p {
    font-size: 1.5rem;
  }
</style>
