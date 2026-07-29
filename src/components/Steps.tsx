import thinkLogo from "@/assets/think.png";
import send from "@/assets/send.svg";
import together from "@/assets/together.svg";

const steps = [
  'Send a message',
  'We look together',
  'Get a real feel',
  'You start',
];

export function Steps() {
  return (
    <section className="container-wide grid grid-cols-1 gap-8 px-8 py-12 sm:px-20 lg:grid-cols-12 lg:gap-0 lg:px-[60px] lg:py-[134px]">
      <div className="reveal col-span-1 lg:col-span-7">
        <h2 className="mx-auto max-w-[471px] text-center text-[30px] font-medium leading-[34px] tracking-[-0.36px] sm:text-4xl sm:leading-[44px]">
          <span>Starting here is</span> <br /> 
          <span>simpler than you think</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[358px] text-center text-sm leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum. Fusce
        </p>
        <img
          src={thinkLogo}
          alt="People getting to know each other"
          className="mt-8 h-auto w-full max-w-[748px] object-cover lg:mt-[101px]"
          loading="lazy"
        />
      </div>

      <div className="reveal col-span-1 flex flex-col justify-end lg:col-span-4 lg:col-start-9">
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
