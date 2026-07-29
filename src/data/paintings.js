import lakefillImage from "../assets/paintings/The_Lakefill.jpg";
import windowImage from "../assets/paintings/Neighbors.jpg";
import boatsImage from "../assets/paintings/Watching_the_Boats.jpg";
import rocksImage from "../assets/paintings/Rocks.jpeg";
import lilyImage from "../assets/paintings/Lilys.jpeg";
import trapperImage from "../assets/paintings/Trapper_Lake.jpg";
import moltonImage from "../assets/paintings/Molton_Barn.jpg";
import schoolImage from "../assets/paintings/School.jpeg";
import homeImage from "../assets/paintings/Home.JPG";

export const paintings = [
  {
    id: "lakefill",
    title: "The Lakefill",
    year: 2026,
    medium: "Gouache on paper",
    dimensions: "8 x 10 inches",
    location: "Northwestern University, Evanston, Illinois",
    image: lakefillImage,
    alt: "Gouache painting of Northwestern University's Lakefill",
    status: "Sold",
  },
  {
    id: "smoke-day-window",
    title: "Neighbors",
    year: 2026,
    medium: "Gouache on paper",
    dimensions: "8 x 10 inches",
    location: "Evanston, Illinois",
    image: windowImage,
    alt: "Interior gouache painting looking through a window",
    status: "Sold",
  },
  {
    id: "boats",
    title: "Watching the Boats",
    year: 2026,
    medium: "Gouache on paper",
    dimensions: "7 x 9 inches",
    location: "Evanston, Illinois",
    image: boatsImage,
    alt: "Gouache painting on pond with lake in background",
    status: "Available",
  },
  {
    id: "rocks",
    year: 2025,
    medium: "Gouache on paper",
    location: "Evanston, Illinois",
    image: rocksImage,
    alt: "Gouache painting of rocks by Lake Michigan",
  },
  {
    id: "lilys",
    title: "Karaoke",
    year: 2024,
    medium: "Gouache on paper",
    location: "Chicago, Illinois",
    image: lilyImage,
    alt: "Gouache painting of green themed karaoke bar",
  },
  {
    id: "trapper",
    title: "Trapper Lake",
    year: 2024,
    medium: "Gouache on paper",
    location: "Grand Tetons, Wyoming",
    image: trapperImage,
    alt: "Gouache painting of mountain lake",
  },
  {
    id: "molton",
    title: "T.A. Molton Barn",
    year: 2024,
    medium: "Gouache on paper",
    location: "Grand Tetons, Wyoming",
    image: moltonImage,
    alt: "Gouache painting of T.A. Molton Barn",
  },
  {
    id: "home",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "30 x 30 inches",
    location: "Hillsborough, California",
    image: homeImage,
    alt: "Oil painting of a walkway at night",
    status: "NFS",
  },
  {
    id: "school",
    year: 2021,
    medium: "Oil on canvas",
    dimensions: "24 x 30 inches",
    location: "Hillsborough, California",
    image: schoolImage,
    alt: "Oil painting of a walkway at night",
    status: "NFS",
  },
];