import { ActionButton } from '@/components/ActionButton';
import { ArrowGlyph } from '@/components/Hero';
import AiEvening from "@/assets/ai-evenings.png";

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo';

const aboutPoints = [
  'A professional space to welcome your clients',
  'Sounding board moments when you need them',
  'Visibility via our network and LED screen',
];

export function About() {
  return (
    <section
      id="about"
      className="container-wide lg:px-12 xl:px-16 relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
      <div className="reveal col-span-1 lg:col-span-7">
        <h2 className="max-w-[590px] pl-0 text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px] lg:pl-20">
          <span className="lg:pl-[36px]">From AI evenings to chair </span>
          <span>massage. From podcast recordings to social
            change.</span>
        </h2>
        <div className="mt-6 pl-0 lg:pl-20">
          <ActionButton>About us</ActionButton>
        </div>
      </div>

      <div className="reveal col-span-1 flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9 lg:pt-[9px]">
        <p className="max-w-[278px] text-sm leading-4">{description}</p>
      </div>

      <div className="reveal col-span-1 pt-4 lg:col-span-7 lg:pt-[64px]">
        <img
          src={AiEvening}
          alt="People meeting in a professional space"
          className="h-auto w-full max-w-[670px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="reveal col-span-1 space-y-7 lg:col-span-4 lg:col-start-9 lg:pt-[106px]">
        {aboutPoints.map((point) => (
          <div key={point} className="flex gap-3">
            <ArrowGlyph className="h-8 w-[18px] shrink-0" />
            <p className="max-w-[272px] text-base font-medium leading-5">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
