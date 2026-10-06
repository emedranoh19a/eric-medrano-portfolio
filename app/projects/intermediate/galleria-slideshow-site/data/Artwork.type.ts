// export const artworks = [
//   {
//     name: "Starry Night",
//     year: 1889,
//     description:
//       'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
//     source: "https://en.wikipedia.org/wiki/The_Starry_Night",
//     slug: "starry-night",
//     artist: {
//       image: "./assets/starry-night/artist.jpg",
//       name: "Vincent Van Gogh",
//     },
//     images: {
//       thumbnail: "./assets/starry-night/thumbnail.jpg",
//       hero: {
//         small: "./assets/starry-night/hero-small.jpg",
//         large: "./assets/starry-night/hero-large.jpg",
//       },
//       gallery: starryNightGallery,
//     },
//   },

import { StaticImageData } from "next/image";

type Artist = {
  image: StaticImageData;
  name: string;
};

export type Images = {
  thumbnail: StaticImageData;
  //No valuable abstraction means no type needed. Leave it inline.
  hero: {
    small: StaticImageData;
    large: StaticImageData;
  };
  gallery: StaticImageData;
};

export type Artwork = {
  name: string;
  year: number;
  description: string;
  source: string;
  slug: string;
  artist: Artist;
  images: Images;
  dialogStyles: string;
};
