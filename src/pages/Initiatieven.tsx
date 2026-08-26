// import aboutHero from "@/assets/home-banner.webp";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import thinkLogo from "@/assets/think.webp";
import send from "@/assets/send.svg";
import together from "@/assets/together.svg";
import { Services } from "@/components/Services";

// Images
import heroMobile from "@/assets/hero-banner-mob.png";
import heroTablet from "@/assets/hero-banner-md.png";
import heroDesktop from "@/assets/home-banner.webp";



const steps = [
  'Een warme en professionele locatie  ',
  'Een klankbord wanneer nodig  ',
  'Zichtbaarheid via netwerk en ledscherm ',
  'De energie van andere ondernemende mensen',
];


const Initiatieven = () => {
    useScrollReveal();

    return (
        <section className="initiatieven py-14 md:py-16 lg:py-20 xl:py-24">
            <div className="container-wide">
                <div className="mx-auto max-w-[500px] mb-14 sm:mb-16 md:mb-20 lg:mb-24 reveal">
                    <h1 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.1] tracking-[-0.36px]">
                        Ruimte voor mensen die iets willen betekenen.
                    </h1>
                    <p className="mt-3 max-w-[480px] leading-[1.35] text-[14px] ">
                       Van AI en educatie tot podcasts, welzijn en maatschappelijke impact. Ontdek de projecten die groeien vanuit Oude Vismijn 1.
                    </p>
                </div>
            </div>
            <figure className="w-full overflow-hidden reveal">
                <picture>
                    <source
                        media="(max-width: 639px)"
                        srcSet={heroMobile}
                    />

                    <source
                        media="(max-width: 1023px)"
                        srcSet={heroTablet}
                    />

                    <img
                        src={heroDesktop}
                        alt="Smiling young man recording a podcast in a cozy home studio"
                        className="h-full w-full object-cover"
                    />
                    </picture>
            </figure>

            <Services/>


   
            {/* <div className="bg-ink pb-10 pt-12 text-cream py-20 lg:py-24 lg:px-12 xl:px-16 hidden">
                <div className="container-wide lg:px-16 xl:px-20">
                    <div className="reveal mx-auto max-w-[502px] text-center">
                        <h2 className="text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px] ">
                            From AI evenings to chair massage. From podcast recordings to social change.
                        </h2>
                    </div>

                    <div className="mt-12 md:mt-16 grid grid-cols-1 gap-x-[112px] lg:mt-[112px] md:grid-cols-2">
                        {services.map((service, index) => (
                            <Card key={`${service.title}-${index}`}
                            className="reveal rounded-none border-0 border-b border-cream/25 py-0 text-cream"
                            >
                            <CardContent className="px-0 py-7 pb-[48px]">
                                <h3 className=" text-[20px] md:text-[22px] lg:text-2xl leading-9">
                                    {service.title}
                                </h3>
                                <p className="mt-1 max-w-[340px] text-sm leading-5">
                                {service.description}
                                </p>
                                <div className="my-8">
                                    <ActionButton dark>Meer informatie</ActionButton>
                                </div>
                            </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div> */}

            <section className="steps-section py-16 pb-10 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
                <div className="container-wide">
                    <div className="reveal mx-auto max-w-[450px]">
                        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
                            <span className="lg:pl-12 xl:pl-18"> Hier beginnen is </span>
                            <span className="">eenvoudiger dan je denkt.</span>                           
                        </h2>
                        <p className="mt-3 text-sm leading-5">
                            Ben je een jonge ondernemer, trainer, coach of initiatiefnemer? Zoek je een plek om klanten te ontvangen of sessies te organiseren? 
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 mt-12 lg:mt-[101px]">
                        <div className="col-span-1 lg:col-span-7 reveal">
                            <figure className="reveal">
                                <img
                                    src={thinkLogo}
                                    alt="People getting to know each other"
                                    className="h-auto w-full max-w-[748px] object-cover "
                                    loading="lazy"
                                    />
                            </figure>
                        </div>
                        <div className="col-span-1 flex flex-col justify-end lg:col-span-4 lg:col-start-9 reveal">
                            <p className="mb-4 text-base">Hier krijg je:</p>
                            {steps.map((step, index) => (
                                <button
                                    key={step}
                                    type="button"
                                    className="group flex items-center gap-6 border-b border-ink/15 py-5 text-left text-xl font-medium leading-9 transition-opacity hover:opacity-60"
                                >
                                    { 
                                    (index + 1) % 2 != 0 ? 
                                    <img src={send} alt="" className="h-[26px] w-[25px]"/> : 
                                    <img src={together} alt="" className="h-[26px] w-[25px]"/>
                                    }
                                    {step}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </section>
    );
};



export default Initiatieven;