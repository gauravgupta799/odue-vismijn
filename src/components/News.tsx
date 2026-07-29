import { Card, CardContent } from '@/components/ui/card';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo';

const newsItems = [
  {
    title: 'Podcast Vismijn — new episode live',
    image: 'https://images.pexels.com/photos/31213674/pexels-photo-31213674.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'JUNE 2025',
  },
  {
    title: 'Podcast Vismijn — new episode live',
    image: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'JUNE 2025',
  },
  {
    title: 'Welcome — a new starter has arrived',
    image: 'https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'JUNE 2025',
  },
];

export function News() {
  return (
    <section className="container-wide px-8 py-12 sm:px-20 lg:px-[203px] lg:py-[122px]">
      <div className="reveal mx-auto max-w-[476px]">
        <h2 className="text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px]">
          <span className="lg:pl-[52px] xl:pl-[64px]"> What happened recently</span><br />
          <span className="">at Oude Vismijn 1</span>
        </h2>
        <p className="mt-3 max-w-[339px] text-xs leading-4">{description}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 lg:mt-[83px]">
        {newsItems.map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            className="reveal rounded-none border-0 bg-transparent py-0"
          >
            <CardContent className="p-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="mt-4 font-instrument text-xs leading-6">
                {item.date}
              </p>
              <h3 className="mt-1 text-xl font-normal leading-7">
                {item.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
