import { ActionButton } from '@/components/ActionButton';
import { Card, CardContent } from '@/components/ui/card';
import visia from "@/assets/visia.svg";
import podVismijn from "@/assets/oude-vismijin.svg";
import go from "@/assets/2go.svg";
import rijschool from "@/assets/rijschool-traffix.svg";
import edulogia from "@/assets/edulogia.svg";
import mygendrive from "@/assets/my-generation-drive.svg";
import mindwideopen from "@/assets/wide-open-minds.svg";
import zenergy from "@/assets/zenergy-massages.svg";
import ledscherm from "@/assets/ledscherm.svg";
import startende from "@/assets/startendeOnder.svg";

// const description ='';

const services = [
  {
    title: 'VISIA',
    description:'VISIA brengt mensen samen die nadenken over artificiële intelligentie en de impact ervan op onze samenleving. Tijdens bijeenkomsten delen we inzichten en toepassingen. De centrale vraag: hoe kan AI-technologie de Lokeraar, de Belg of de wereldburger sterker maken?',
    icon:visia,
    url:""
  },
  {
    title: 'Podcast Vismijn',
    description:'In de Podcast Vismijn krijgen boeiende mensen en boeiende verhalen een podium. De studio op Oude Vismijn 1 biedt een knappe, rustige en professionele setting voor gesprekken die inspireren, verbinden en uitdagen. Je kan het team ook inhuren voor jouw project, ook op verplaatsing.',
    icon:podVismijn,
    url:"https://www.vismijn.net/"
  },
  {
    title: '2GO Lokeren',
    description:'2GO Lokeren is een vrijwilligersproject dat mensen met minder kansen helpt om hun rijbewijs te behalen. Een rijbewijs opent deuren naar werk en zelfstandigheid. Dit loopt via een buddywerking, volledig op vrijwillige basis,',
    icon:go,
    url:"https://2govzw.be/vestiging/2go-lokeren/"
  },
  {
    title: 'Rijschool Traffix ',
    description:'Op Oude Vismijn 1 vinden vergaderingen en train-the-trainer momenten plaats in het kader van rijopleiding en professionele ontwikkeling.',
    icon:rijschool,
    url:"https://www.traffix.be/"
  },
  {
    title: 'Edulogia',
    description:'Edulogia organiseert opleidingen en vormingen voor professionals in mobiliteit en educatie. Oude Vismijn 1 fungeert als ontmoetingsplek voor nieuwe docenten of train-the- trainersessies in kleine groep.',
    icon:edulogia,
    url:"https://edulogia.be/"
  },
  {
    title: 'My Generation Drive',
    description:'My Generation Drive richt zich op bewustwording van bestuurders. Oude Vismijn 1 fungeert als ontmoetingsplek voor nieuwe lesgevers, moderatoren of train-the-trainersessies in kleine groep.',
    icon:mygendrive,
    url:"https://mygenerationdrive.be/"
  },
  {
    title: 'Minds Wide Open',
    description:'Minds Wide Open werkt als bemiddelaar met families, bedrijven, organisaties, burgers en mensen in hett onderwijs Op Oude Vismijn 1 word je uitgenodigd om te luisteren en te spreken met elkaar zodat er aan een regeling kan gewerkt worden zonder verliezers en winnaars.',
    icon:mindwideopen,
    url:"https://www.mindswideopen.be/"
  },
  {
    title: 'Zenergy Massage',
    description:'Zenergy biedt (duo-)stoelmassages voor nek, rug en hoofd. Even vertragen in een omgeving waar veel gebeurt. Puur loslaten en genieten.',
    icon:zenergy,
    url:"https://www.zenergybycharlot.be/"
  },
  {
    title: 'Ledscherm Vismijn',
    description:'Aan de straatzijde van Oude Vismijn 1 hangt een groot ledscherm. Gebruikers kunnen hier extra zichtbaarheid krijgen voor hun initiatief, bedrijven krijgne hier een maximale visibiliteit aan een van de toegangspoorten van de stad.',
    icon:ledscherm,
    url:"https://www.vismijnledscherm.be/"
  },
  {
    title: 'Startende ondernemers',
    description: 'Jonge ondernemers kunnen hier starten. Ze gebruiken de ruimte om klanten te ontvangen, sessies te organiseren en hun idee scherper te maken, met behulp van enkele ervaren klankborden en met visibiliteit op het scherm.',
    icon:startende,
    url:"https://startendeondernemers.nl/"
  },
];

export function Services() {
  return (
    <section id="diensten" className="bg-ink  text-cream py-16 sm:py-20 md:py-24 lg:py-28 lg:px-12 relative overflow-hidden">
      {/* <div className="absolute left-0 top-0 h-[12px] w-[56%] bg-[#f1f0eb]" />
      <div className="absolute right-[14%] top-0 h-[12px] w-[14%] bg-[#f1f0eb]" /> */}

      <div className="container-wide  lg:px-10 xl:px-16">
        <div className="reveal mx-auto max-w-[502px] text-center">
          <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
            <span className="">Onze initiatieven.</span>
          </h2>
          <p className="mt-3 max-w-[427px] text-sm leading-5 mx-auto">
            Van AI en educatie tot podcasts, welzijn en maatschappelijke impact. Ontdek de projecten die groeien vanuit Oude Vismijn 1.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:gap-[80px] md:gap-x-[96px] sm:grid-cols-2 xl:grid-cols-3 mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[112px]">
          {services.map((service, index) => (
            <Card key={`${service.title}-${index}`}
              className="reveal rounded-none border-0 border-t border-cream/25 py-0 text-cream"
            >
              <CardContent className="px-0 pt-10 pb-10 sm:pb-0 ">
                <figure className="service-icon mb-4">
                  <img src={service.icon} alt={service.title} className="img-fluid" loading="lazy"/>
                </figure>
                <p className="mt-1 max-w-[320px] text-sm leading-5">
                  {service.description}
                </p>
                <a href={service.url} className="my-6 inline-block" target="_blank">
                  <ActionButton dark>Meer informatie</ActionButton>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
