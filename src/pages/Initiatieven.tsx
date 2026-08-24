import aboutHero from "@/assets/home-banner.png";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ActionButton } from '@/components/ActionButton';
import { Card, CardContent } from '@/components/ui/card';
import thinkLogo from "@/assets/think.png";
import send from "@/assets/send.svg";
import together from "@/assets/together.svg";


const services = [
  {
    title: 'Professionele Ruimte',
    description:'',
  },
  {
    title: 'Ledscherm Zichtbaarheid',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo.',
  },
  {
    title: 'Professionele Ruimte',
    description:'',
  },
  {
    title: 'Klankbordgesprekken',
    description:'',
  },
];


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
                    <h2 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[48px] tracking-[-0.36px] ">
                        Ruimte voor mensen die iets willen betekenen.
                    </h2>
                    <p className="mt-2 max-w-[480px] leading-[1.35] text-[14px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo.
                    </p>
                </div>
            </div>
            <figure className="w-full overflow-hidden reveal">
                <img src={aboutHero} alt="Oude Vismijn 1" className="img-fluid" />
            </figure>


            {/* ------- */}
            <div className="bg-ink pb-10 pt-12 text-cream py-20 lg:py-24 lg:px-12 xl:px-16">
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
            </div>

            {/*  */}

            <section className="steps-section pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
                <div className="container-wide">
                    <div className="reveal mx-auto max-w-[430px]">
                        <h2 className="text-[30px]leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px]">
                            <span className="lg:pl-12 xl:pl-18">Starting here is </span>
                            <span className="">simpler than you think</span>
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