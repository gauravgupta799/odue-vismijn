import thinkLogo from "@/assets/think.png";
import send from "@/assets/send.svg";
import together from "@/assets/together.svg";

const steps = [
  'Een warme en professionele locatie  ',
  'Een klankbord wanneer nodig  ',
  'Zichtbaarheid via netwerk en ledscherm ',
  'De energie van andere ondernemende mensen',
];

export function Steps() {
  return (
    <section className="container-wide grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 lg:px-12 xl:px-16">
      <div className="reveal col-span-1 lg:col-span-7">
        <h2 className="mx-auto max-w-[471px] text-center text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px]">
          <span>Wil jij hier iets starten? </span> 
        </h2>
        <p className="mx-auto mt-3 max-w-[358px] text-center text-sm leading-5">
         Ben je een jonge ondernemer, trainer, coach of initiatiefnemer? Zoek je een plek om klanten te ontvangen of sessies te organiseren? 
        </p>
        <img
          src={thinkLogo}
          alt="People getting to know each other"
          className="mt-8 h-auto w-full max-w-[748px] object-cover lg:mt-[101px]"
          loading="lazy"
        />
      </div>

      <div className="reveal col-span-1 flex flex-col justify-end lg:col-span-4 lg:col-start-9">
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
    </section>
  );
}
