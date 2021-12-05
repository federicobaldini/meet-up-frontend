import { writable } from "svelte/store";

const meetups = writable([
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
]);

export default meetups;
