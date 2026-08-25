import gallery01 from "../assets/gallery/gallery-01.jpg";
import gallery02 from "../assets/gallery/gallery-02.jpg";
import gallery03 from "../assets/gallery/gallery-03.jpg";
import gallery04 from "../assets/gallery/gallery-04.jpg";

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: gallery01,
    alt: "Podcast session at Oude Vismijn 1",
  },
  {
    id: 2,
    image: gallery02,
    alt: "Workspace at Oude Vismijn 1",
  },
  {
    id: 3,
    image: gallery03,
    alt: "People working together",
  },
  {
    id: 4,
    image: gallery04,
    alt: "Oude Vismijn 1 interior",
  },
];