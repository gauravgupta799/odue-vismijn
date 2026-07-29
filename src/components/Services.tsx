import { ActionButton } from '@/components/ActionButton';
import { Card, CardContent } from '@/components/ui/card';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo';

const services = [
  {
    title: 'Professionele Ruimte',
    description,
  },
  {
    title: 'Ledscherm Zichtbaarheid',
    description,
  },
  {
    title: 'Professionele Ruimte',
    description,
  },
  {
    title: 'Klankbordgesprekken',
    description,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-ink pb-10 pt-12 text-cream py-20 lg:py-24 lg:px-12 xl:px-16"
    >
      <div className="container-wide  lg:px-16 xl:px-20">
        <div className="reveal mx-auto max-w-[502px]">
          <h2 className="pl-0 text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px] ">
            <span className="lg:pl-[36px]">From AI evenings to chair </span>
            <span>massage. From podcast recordings to social
            change.</span>
          </h2>
          <p className="mt-5 max-w-[427px] text-sm leading-4">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-[154px] lg:mt-[112px] lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={`${service.title}-${index}`}
              className="reveal rounded-none border-0 border-t border-cream/25 py-0 text-cream"
            >
              <CardContent className="px-0 py-5 pb-[48px]">
                <h3 className="text-2xl font-medium leading-9">
                  {service.title}
                </h3>
                <p className="mt-1 max-w-[273px] text-sm leading-4">
                  {service.description}
                </p>
                <div className="my-5">
                  <ActionButton dark>Learn More</ActionButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
