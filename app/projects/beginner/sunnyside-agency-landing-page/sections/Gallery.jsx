import Image from "next/image";
import {
  imgGalleryCone,
  imgGalleryMilkBottles,
  imgGalleryOrange,
  imgGallerySugarCubes,
} from "../imageIndex";

const galleryItems = [
  { imgSrc: imgGalleryMilkBottles, alt: "milk bottles" },
  { imgSrc: imgGalleryOrange, alt: "orange in a plate" },
  { imgSrc: imgGalleryCone, alt: "cone" },
  { imgSrc: imgGallerySugarCubes, alt: "sugar cubes" },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ imgSrc, alt }) {
  const { desktop, mobile } = imgSrc;
  return (
    <div className="relative h-[188px] w-full sm:h-[385px] lg:h-[447px]">
      <Image src={mobile} alt={alt} fill className="object-cover sm:hidden" />
      <Image
        src={desktop}
        alt={alt}
        fill
        className="object-cover hidden sm:block"
      />
    </div>
  );
}
