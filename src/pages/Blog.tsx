import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { newsItems } from "../data/news";
import { NavLink } from "react-router-dom";

const Blog =()=>{
    useScrollReveal();

    return (
    <section className="container-wide py-14 md:py-16 lg:py-20 xl:py-24">
      <div className="reveal mx-auto max-w-[500px]">
        <h2 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[48px] tracking-[-0.36px]">
            What happened recently at Oude Vismijn 1 
        </h2>
        <p className="mt-2 max-w-[400px] leading-[1.25] text-[14px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        {newsItems.map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            className="reveal rounded-none border-0 bg-transparent mb-12 md:mb-14 lg:mb-16 xl:mb-20"
          >
            <CardContent className="p-0">
              <NavLink to="/bloggendetail">
                <figure className="overflow-hidden group">
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
    )
}

export default Blog;