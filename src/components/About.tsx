import { ActionButton } from '@/components/ActionButton';
import { ArrowGlyph } from '@/components/Hero';
import AiEvening from "@/assets/ai-evenings.png";

const description =
  'Oude Vismijn 1 is geen klassiek businesscenter. Hier wordt gewerkt, geleerd, opgenomen, gebouwd en bijgeschaafd. Alles wat hier gebeurt, heeft beweging in zich.';

const aboutPoints = [
  'Een warme en professionele omgeving waar ondernemers, opleiders en sociale initiatieven samenkomen.',
  'Een plek waar gewerkt, geleerd, opgenomen, gebouwd en bijgeschaafd wordt.',
  'Een omgeving waar ontwikkeling, samenwerking en vooruitgang centraal staan.',
];

export function About() {
  return (
    <section
      id="about"
      className="container-wide lg:px-12 xl:px-16 relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
      <div className="reveal col-span-1 lg:col-span-7">
        <h2 className="max-w-[635px] pl-0 text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px] lg:pl-20">
          <span className="lg:pl-[36px]">Een werkplek met karakter. </span>
          <span>Een ontmoetingsplek met inhoud. </span>
        </h2>
        <div className="mt-6 pl-0 lg:pl-20">
          <ActionButton>Over Ons</ActionButton>
        </div>
      </div>

      <div className="reveal col-span-1 flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9 lg:pt-[9px]">
        <p className="max-w-[380px] text-sm leading-5">{description}</p>
      </div>

      <div className="reveal col-span-1 pt-4 lg:col-span-7 lg:pt-[64px]">
        <img
          src={AiEvening}
          alt="Mensen die elkaar ontmoeten in een professionele omgeving"
          className="h-auto w-full max-w-[670px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="reveal col-span-1 space-y-7 lg:col-span-4 lg:col-start-9 lg:pt-[106px]">
        {aboutPoints.map((point) => (
          <div key={point} className="flex gap-3">
            <ArrowGlyph className="h-8 w-[18px] shrink-0" />
            <p className="max-w-[340px] text-base font-medium leading-5">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
