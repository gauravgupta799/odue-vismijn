import heroBanner from "@/assets/home-banner.png";




const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo';

export function Hero() {
  return (
    <section
      id="home"
      className="container-wide grid grid-cols-1 gap-7 lg:px-12 xl:px-16 pb-6 pt-8 lg:grid-cols-12 lg:gap-0 lg:py-[96px]"
    >
      <h1 className="reveal col-span-1 max-w-[404px] text-[30px] leading-[31px] tracking-[-0.44px] sm:text-[44px] sm:leading-[48px] lg:col-span-6">
        Space For People Who Want To Make A Difference.
      </h1>
      <div className="reveal flex items-start gap-3 self-end lg:col-span-4 lg:col-start-9 lg:mb-1">
        <ArrowGlyph className="mt-0.5 h-8 w-[18px] shrink-0" />
        <p className="max-w-[278px] text-sm leading-4">{description}</p>
      </div>
    </section>
  );
}

export function HeroImage() {
  return (
    <img
      src={heroBanner}
      alt="Smiling young man recording a podcast in a cozy home studio"
      className="reveal h-auto w-full object-cover lg:h-[493px]"
      loading="eager"
    />
  );
}

export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0H18L8 32H0L10 0Z" fill="#6E2E2A"/>
    </svg>
  );
}
