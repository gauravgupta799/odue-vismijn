import thinkLogo from "@/assets/think.webp";
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
    <section className="steps-section py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 lg:px-12 xl:px-16">
      <div className="container-wide">
        <div className="reveal mx-auto max-w-[460px] text-center">
          <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.36px]">
            <span>Wil jij hier iets starten? </span> 
          </h2>
          <p className="mt-3 text-sm leading-5">
            Ben je een jonge ondernemer, trainer, coach of initiatiefnemer? Zoek je een plek om klanten te ontvangen of sessies te organiseren? 
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0 mt-12 lg:mt-[101px] items-center">
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
          <div className="col-span-1 lg:col-span-4 lg:col-start-9 reveal">
            <p className="mb-4 text-base">Hier krijg je:</p>
            <ul className="steps__list">
              {steps.map((step, index) => (
                <li key={step}
                className="flex items-center gap-6 border-b border-ink/15 py-5 text-left text-xl font-medium leading-[1.25]"
                >
                  { 
                    (index + 1) % 2 != 0 ? 
                    <img src={send} alt="" className="h-[26px] w-[25px]"/> : 
                    <img src={together} alt="" className="h-[26px] w-[25px]"/>
                  }
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
