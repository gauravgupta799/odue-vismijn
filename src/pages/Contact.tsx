// import { FormEvent } from "react";
import contactImage from "../assets/contact.webp";
// import { ActionButton } from '@/components/ActionButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
// import FloatingInput from "@/components/FloatingInput";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  useScrollReveal();
    

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Handle your form submission here
//     console.log("Form submitted");
//   };

  return (
      <section className="contact py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="container-wide">
            {/* Heading */}
            <div className="reveal mx-auto max-w-[464px]">
                <h1 className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-[1.1] tracking-[-0.36px] ">
                    Het begint altijd met een gesprek.
                </h1>

                <p className="mt-3 max-w-[400px] leading-[1.25] text-[14px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo;
                </p>
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap:-[112] mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 reveal items-center">
                {/* Image */}
                <div className="w-full max-w-[500px]">
                    <figure className=" overflow-hidden">
                        <img src={contactImage} alt="Ons kantoor" className="img-fluid" />
                    </figure>
                </div>

                {/* Contact form */}
                <div className="w-full max-w-[620px]">
                    <div>
                        <h2 className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.15] tracking-[-0.02em]">
                            Vertel Ons Wat Je Nodig Hebt
                        </h2>
                        <p className="mt-2 text-[14px] leading-[1.3]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>

                    <ContactForm/>
                </div>
            </div>

            {/* Contact information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mt-16 md:mt-20 lg:mt-24">
                <ContactInfo
                    title="E-MAILADRES"
                    value="info@oudevismijn1.be"
                    link="mailto:info@oudevismijn1.be"
                    underline
                />

                <ContactInfo
                    title="TELEFOONNUMMER"
                    value="+32 9 394 20 10"
                    link="tel:+32 9 394 20 10"
                />

                <ContactInfo
                    title="ADRES"
                    value="Rekelstraat 5, 9000 Gent, Belgium"
                    link="https://maps.app.goo.gl/3nxsF3asFfLCwR116"
                />
            </div>
        </div>
      </section>
  );
};

interface ContactInfoProps {
  title: string;
  value: React.ReactNode;
  link:string;
  underline?: boolean;
}

const ContactInfo = ({title, value, underline = false, link}: ContactInfoProps) => {
  return (
    <div className="reveal">
      <p className="text-[12px] uppercase leading-[1.3] text-[#333333]">
        {title}
      </p>

      <a href={link} target="_blank" className={`mt-2 text-[14px] leading-[1.14] text-[#222222] 
      ${ underline ? "underline underline-offset-2" : "" } cursor-pointer transition-opacity hover:opacity-60 hover:underline`}
      >
        {value}
      </a>
    </div>
  );
};

export default ContactSection;




 {/* <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
        <div className="relative border-b border-[#777] mb-4">
            <input
                id="name"
                type="text"
                placeholder=" "
                className="peer h-16 w-full bg-transparent text-[14px] outline-none "
            />
            <label
                htmlFor="name"
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-[#454545] transition-all duration-200 ease-in-out
                peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[12px]"
            >
                Voornaam en naam <span className="text-[#5b1111]">*</span>
            </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
            <div className="relative border-b border-[#777] mb-4">
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=" "
                    className="peer h-16 w-full bg-transparent text-[14px] outline-none "
                />
                <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-[#454545] transition-all duration-200 ease-in-out
                    peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[12px]"
                >
                    E-mailadres <span className="text-[#5b1111]">*</span>
                </label>
            </div>

            <div className="relative border-b border-[#777] mb-4">
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    className="peer h-16 w-full bg-transparent text-[14px] outline-none "
                />
                <label
                    htmlFor="phone"
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-[#454545] transition-all duration-200 ease-in-out
                    peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[12px]"
                >
                        Telefoonnummer <span className="text-[#5b1111]">*</span>
                </label>
            </div>
        </div>

        <div className="relative border-b border-[#777] mb-4">
            <input
                id="message"
                name="message"
                placeholder=" "
                className="peer h-20 w-full bg-transparent text-[14px] outline-none resize-none"
            />
            <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-[#454545] transition-all duration-200 ease-in-out
                peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[12px]"
            >
                Vertel ons kort over je idee <span className="text-[#5b1111]">*</span>
            </label>
        </div>

        <div className="mt-10 md:mt-12 xl:mt-14 flex items-center gap-[4px]">
            <ActionButton>
                Submit
            </ActionButton>
        </div>
    </form> */}