import { Card, CardContent } from '@/components/ui/card';
import { newsItems } from "../data/news";
import { NavLink } from "react-router-dom";


export function News() {
  return (
    <section className="container-wide py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36" id="nieuws&updates">
      <div className="reveal mx-auto max-w-[462px]">
        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
          <span className="lg:pl-[52px] xl:pl-[64px]"> Wat gebeurt er op Oude Vismijn 1? </span>
          <span className="">at Oude Vismijn 1</span>
        </h2>
        <p className="mt-3 max-w-[460px] text-[14px] leading-5">
          Een plek waar opleidingen doorgaan, podcasts worden opgenomen, AI besproken wordt, sociale projecten groeien en ondernemers hun eerste klanten ontvangen.
        </p>
      </div>

      <div className="mt-12 md:mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-[83px]">
        {newsItems.slice(0, 3).map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            className="reveal rounded-none border-0 bg-transparent py-0"
          >
            <CardContent className="p-0">
               <NavLink to="/bloggendetail">
                <figure className="overflow-hidden group block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid transition-transform duration-500 group-hover:scale-[1.05] cursor-pointer"
                    loading="lazy"
                  />
                </figure>
               </NavLink>
              <p className="mt-4 font-instrument text-xs leading-6">
                {item.date}
              </p>
              <p className="mt-1 text-[16px] md:text-xl font-normal leading:4 md:leading-6">
                <NavLink to="/bloggendetail" className="hover:text-black/75 hover:underline">
                  {item.title}
                </NavLink>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
