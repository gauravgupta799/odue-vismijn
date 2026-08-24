import { FormEvent } from "react";
import contactImage from "../assets/contact.png";
import { ActionButton } from '@/components/ActionButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  useScrollReveal();
    

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle your form submission here
    console.log("Form submitted");
  };

  return (
      <section className="contact py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="container-wide">
            {/* Heading */}
            <div className="reveal mx-auto max-w-[464px]">
                <h1 className="text-[32px] leading-[1.1] sm:text-[36px] md:text-[40px] lg:text-[44px] tracking-[-0.04em] capitalize ">
                    Het begint altijd met een gesprek.
                </h1>

                <p className="mt-2 max-w-[400px] leading-[1.25] text-[14px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce vehicula, justo;
                </p>
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-2 md:items-start gap-12 md:gap-14 lg:gap-16 xl:gap:-[112] mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 reveal">
                {/* Image */}
                <div className="w-full max-w-[500px]">
                    <figure className=" overflow-hidden">
                        <img
                            src={contactImage}
                            alt="Ons kantoor"
                            className="h-full w-full object-cover max-w-[100%]"
                        />
                    </figure>
                </div>

                {/* Contact form */}
                <div className="w-full max-w-[620px]">
                    <div>
                        <h2 className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.5] tracking-[-0.02em]">
                            Vertel Ons Wat Je Nodig Hebt
                        </h2>
                        <p className="mt-1 text-[14px] leading-[1.3]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 md:mt-14 lg:mt-16">
                        {/* Name */}
                        <div className="border-b border-[#777]">
                            <label htmlFor="name" className="block pb-2 text-[14px] text-[#454545]"
                            >
                                Voornaam en naam <span className="text-[#5b1111]">*</span>
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="h-5 w-full bg-transparent text-[14px] outline-none"
                            />
                        </div>

                        {/* Email + Phone */}
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-3">
                            <div className="border-b border-[#777]">
                            <label
                                htmlFor="email"
                                className="block pb-2 text-[14px] text-[#454545]"
                            >
                                E-mailadres <span className="text-[#5b1111]">*</span>
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="h-5 w-full bg-transparent text-[14px] outline-none"
                            />
                            </div>

                            <div className="border-b border-[#777]">
                            <label
                                htmlFor="phone"
                                className="block pb-2 text-[14px] text-[#454545]"
                            >
                                Telefoonnummer <span className="text-[#5b1111]">*</span>
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="h-5 w-full bg-transparent text-[14px] outline-none"
                            />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-7">
                            <label
                                htmlFor="message"
                                className="block pb-2 text-[14px] text-[#454545]"
                            >
                            Vertel ons kort over je idee{" "}
                            <span className="text-[#5b1111]">*</span>
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="mt-8 block w-full resize-none border-b border-[#777] bg-transparent text-[14px] outline-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="mt-8 md:mt-10 xl:mt-12 flex items-center gap-[4px]">
                            <ActionButton>
                                Submit
                            </ActionButton>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6  mt-14 md:mt-16 lg:mt-20">
                <ContactInfo
                    title="E-MAILADRES"
                    value="info@oudevismijn1.be"
                    underline
                />

                <ContactInfo
                    title="TELEFOONNUMMER"
                    value="+32 9 394 20 10"
                />

                <ContactInfo
                    title="ADRES"
                    value="Rekelstraat 5, 9000 Gent, Belgium"
                />
            </div>
        </div>
      </section>
  );
};

interface ContactInfoProps {
  title: string;
  value: React.ReactNode;
  underline?: boolean;
}

const ContactInfo = ({title, value, underline = false}: ContactInfoProps) => {
  return (
    <div className="reveal">
      <p className="text-[12px] uppercase leading-[1.3] text-[#333333]">
        {title}
      </p>

      <div
        className={`mt-2 text-[14px] leading-[1.14] text-[#222222] ${
          underline ? "underline underline-offset-2" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
};

export default ContactSection;