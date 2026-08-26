import heroBanner from "@/assets/home-banner.webp";


const description ='Welkom op Oude Vismijn 1 in Lokeren. Dit is de plek waar projecten samenkomen en waar nieuwe ideeën kunnen starten. Soms groeit hier een bedrijf. Soms een samenwerking. Soms gewoon een goed idee dat eindelijk vorm krijgt.';


export function Hero() {
  return (
    <section className="hero-section py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[96px]" id="home">
      <div className="container-wide">
        <div className="hero-content-wrapper grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-0 lg:px-12 xl:px-16">
          <h1 className="reveal col-span-1 lg:col-span-6 max-w-[404px] text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.1] tracking-[-0.36px] ">
            Ruimte voor mensen die iets willen betekenen.
          </h1>
          <div className="reveal flex items-start gap-3 self-end lg:col-span-4 lg:col-start-9 lg:mb-1">
            <ArrowGlyph className="mt-0.5 h-8 w-[18px] shrink-0" />
            <p className="max-w-[380px] text-sm leading-5">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroImage() {
  return (
    <img
      src={heroBanner}
      alt="Smiling young man recording a podcast in a cozy home studio"
      className="reveal img-fluid"
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
