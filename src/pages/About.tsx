// Images
import aboutMobile from "@/assets/aboutImgs/about-banner-mob.webp";
import aboutTablet from "@/assets/aboutImgs/about-banner-tab.webp";
import aboutDesktop from "@/assets/aboutImgs/about-hero-banner-desk.webp";

import aboutTeam from "@/assets/aboutImgs/warm.webp";
import aboutSpace from  "@/assets/aboutImgs/podcast.webp";
import aboutFist from  "@/assets/aboutImgs/energetic.webp";
import TestimonialSection from "@/components/testimonial";

import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
    useScrollReveal();

    return (
        <section className="about-page py-14 md:py-16 lg:py-20 xl:py-24">
            <div className="container-wide">
                <div className="mx-auto max-w-[480px] mb-14 sm:mb-16 md:mb-20 lg:mb-24 reveal">
                    <span className="text-[12px] uppercase tracking-[0.08em] text-[#5b1111] block mb-4">
                        Over Ons
                    </span>
                    <h1 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.1] tracking-[-0.36px]">
                        Wat is Oude Vismijn 1?
                    </h1>
                    <p className="mt-3 max-w-[400px] leading-[1.25] text-[14px] ">
                       Oude Vismijn 1 is geen klassiek businesscenter. Hier wordt gewerkt, geleerd, opgenomen, gebouwd en bijgeschaafd. Alles wat hier gebeurt, heeft beweging in zich.
                    </p>
                </div>
            </div>
            <picture className="w-full overflow-hidden reveal">
                <source
                    media="(max-width: 639px)"
                    srcSet={aboutMobile}
                />

                <source
                    media="(max-width: 1023px)"
                    srcSet={aboutTablet}
                />

                <img
                    src={aboutDesktop}
                    alt="Smiling young man recording a podcast in a cozy home studio"
                    className="h-full w-full object-cover"
                />
            </picture>

            {/* h-full w-full object-cover object-center h-[250px] sm:h-[360px] md:h-[430px] lg:h-[510px]*/}

            <section className="pt-20 sm:pt-24 md:pt-28 lg:py-[112px] pb-8">
                <div className="container-wide">
                    <div className="mx-auto max-w-[440px] mb-14 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 reveal">
                        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
                            <span>Voor mensen die iets willen starten</span> 
                        </h2>
                        <p className="mt-2 text-sm leading-5">
                            Een plek waar ideeën kunnen groeien en mensen elkaar
                            ontmoeten. Waar ruimte is voor creativiteit, ondernemen
                            en samenwerking. 
                        </p>
                    </div>

                    {/* Feature-1 */}
                    <AboutFeature
                        title={
                            <>
                                Een warme en
                                professionele locatie
                            </>
                        }
                        description="Een fijne plek waar je rustig kunt werken, mensen kunt ontvangen en samen nieuwe ideeën kunt ontwikkelen."
                        image={aboutTeam}
                        imageAlt="Mensen aan het werk"
                        imagePosition="right"
                    />

                    {/*  Feature 2*/}
                    <AboutFeature
                        title={
                            <>
                                Ruimte voor sessies
                                en opleidingen
                            </>
                        }
                        description="Van kleine meetings tot workshops en opleidingen. Onze ruimtes kunnen flexibel worden ingezet."
                        image={aboutSpace}
                        imageAlt="Werkruimte"
                        imagePosition="left"
                    />

                    {/* Feature 3 */}
                    <AboutFeature
                        title={
                            <>
                                De energie van andere
                                ondernemende mensen
                            </>
                        }
                        description="Je bevindt je tussen mensen die net als jij willen bouwen, creëren en vooruitgaan."
                        image={aboutFist}
                        imageAlt="Samenwerking"
                        imagePosition="right"
                    />

                </div>
            </section>


            {/* Dark Information */}
            <section className="relative overflow-hidden bg-[#2b0505] py-20 text-white sm:py-28 lg:py-[110px] reveal">
                <div className="absolute left-0 top-0  h-[6px] sm:h-[8px] md:h-[10] lgh-[12px] w-[56%] bg-[#f1f0eb]" />
                <div className="absolute right-[14%] top-0 h-[6px] sm:h-[8px] md:h-[10] lg-h-[12px] w-[14%] bg-[#f1f0eb]" />

                <div className="container-wide">
                    <div className="mx-auto max-w-[1180px]">
                        <div className="mx-auto max-w-[440px] mb-14 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 reveal">
                            <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
                                Voor mensen die iets
                                willen starten
                            </h2>
                            <p className="mt-3 text-sm leading-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo.
                            </p>
                        </div>

                        <div className="mx-auto max-w-[720px] mt-12 grid gap-8 sm:grid-cols-2 sm:gap-16">
                            <p className="text-[12px] leading-[1.5] text-white/90 reveal">
                                Oude Vismijn 1 is ontstaan vanuit een eenvoudig idee: wat als je een plek creëert waar verschillende initiatieven samenkomen, zonder dat ze elkaar in de weg zitten?
                            </p>

                            <p className="text-[12px] leading-[1.5] text-white/90 reveal">
                                Een plek waar opleidingen doorgaan, podcasts worden opgenomen, AI besproken wordt, sociale projecten groeien en ondernemers hun eerste klanten ontvangen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Large-Statement */}
            <div className="overflow-hidden bg-[#2b0505] text-white text-center reveal">
                <h2 className="whitespace-nowrap text-[30px] leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[72px]">
                    Wel concrete mensen die concreet bouwen
                </h2>
            </div>

            <TestimonialSection/>

        </section>
    );
};

interface AboutFeatureProps {
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "right" | "left";
}

const AboutFeature = ({title, description, image, imageAlt, imagePosition,}: AboutFeatureProps) => {
  const imageElement = (
    <div className="w-full md:w-[50%] reveal">
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[1.4] w-full object-cover"
      />
    </div>
  );

  const textElement = (
    <div className="flex w-full items-center md:w-[50%] reveal">
      <div className="max-w-[340px] md:mx-auto">
        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[1.2] tracking-[-0.03em] ">
          {title}
        </h3>

        <p className="mt-3 max-w-[480px] leading-[1.25] text-[14px] ">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="pb-14 sm:pb-16 md:pb-20  lg:pb-24 xl:pb-28">
        <div className={`mx-auto flex max-w-[1400px] flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 ${ imagePosition === "left" ? "" : "md:flex-row-reverse" }`}
        >
            {imageElement}
            {textElement}
        </div> 
    </div>
  );
};

export default About;