import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Keyboard, A11y, Autoplay } from "swiper/modules";
import "swiper/css";


import galleryImg1 from "@/assets/home-banner.webp"


const galleryItems = [
  {
    id:1,
    url:`${galleryImg1 }`,
    alt: 'Professionals in a collaborative meeting',
  },
  {
    id:2,
    url: 'https://images.pexels.com/photos/7674645/pexels-photo-7674645.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Diverse team collaborating in a stylish office',
  },
  {
    id:3,
    url: 'https://images.pexels.com/photos/1647907/pexels-photo-1647907.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Group of professionals in a bright office',
  },
  {
    id:4,
    url: 'https://images.pexels.com/photos/8761650/pexels-photo-8761650.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Professionals networking at a business seminar',
  },
]

const Gallery = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Keyboard, A11y,  Autoplay]}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop
        speed={700}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex); }}
      >
        {galleryItems.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.url}
              alt={item.alt}
              className="w-full object-cover aspect-[1.8] sm:aspect-[1.9] md:aspect-[2.2] lg:aspect-[2.5] xl:aspect-[3]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Counter */}
      <div className="absolute left-8 top-10 z-10 text-white">
        {String(activeIndex + 1).padStart(2, "0")}/
        {String(galleryItems.length).padStart(2, "0")}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center border border-white/50 bg-black/30 text-white backdrop-blur-sm transition-all hover:text-black hover:bg-white"
          aria-label="Previous image"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        className="flex h-12 w-12 items-center justify-center border border-white/50 bg-black/30 text-white backdrop-blur-sm transition-all hover:text-black hover:bg-white"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Gallery;