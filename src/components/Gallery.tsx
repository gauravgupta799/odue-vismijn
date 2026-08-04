import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ActionButton } from '@/components/ActionButton';
import galleryImg1 from "@/assets/home-banner.png"

const galleryImages = [
  {
    // src: 'https://images.pexels.com/photos/7495291/pexels-photo-7495291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    src:`${galleryImg1 }`,
    alt: 'Professionals in a collaborative meeting',
  },
  {
    src: 'https://images.pexels.com/photos/7674645/pexels-photo-7674645.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Diverse team collaborating in a stylish office',
  },
  {
    src: 'https://images.pexels.com/photos/1647907/pexels-photo-1647907.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Group of professionals in a bright office',
  },
  {
    src: 'https://images.pexels.com/photos/8761650/pexels-photo-8761650.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Professionals networking at a business seminar',
  },
];

export function Gallery() {
  const [active, setActive] = useState(0);

  const go = (dir: number) =>
    setActive((prev) => (prev + dir + galleryImages.length) % galleryImages.length);

  return (
    <>
      <section className="container-wide py-20 lg:py-24 xl:py-28 lg:px-12 xl:px-16">
        <div className="reveal grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0">
          <h2 className="col-span-1 text-[48px] font-medium leading-none tracking-[-0.64px] sm:text-[64px] lg:col-span-7">
            Gallery
          </h2>
          <div className="col-span-1 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[326px] text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia
            </p>
            <div className="mt-5">
              <ActionButton>View gallery</ActionButton>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Gallery showcase">
        <div className="reveal relative">
          {galleryImages.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`w-full object-cover transition-opacity duration-700 ${
                i === active
                  ? 'block h-auto lg:h-[480px]'
                  : 'absolute inset-0 hidden'
              }`}
              loading="lazy"
            />
          ))}

          <span className="absolute left-8 top-5 font-display text-base leading-5 text-white sm:left-20 lg:left-[60px] lg:top-10">
            {String(active + 1).padStart(2, '0')}/
            {String(galleryImages.length).padStart(2, '0')}
          </span>

          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
