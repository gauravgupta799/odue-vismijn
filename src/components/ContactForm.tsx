import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormData,
} from "../schemas/contactSchema";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    }
  };

  useEffect(()=>{
    if(submitStatus !== "success") return;

    const timeoutId = setTimeout(()=>{
        setSubmitStatus("idle");
    }, 3000);

    return ()=> clearTimeout(timeoutId);

  },[submitStatus])

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-12">
            {/* Name */}
            <div>
                <label  htmlFor="name" className="block pb-2 text-[14px] text-[#454545]">
                    Voornaam en naam{" "}
                    <span className="text-[#5b1111]">*</span>
                </label>

                <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className={`h-7 w-full border-b bg-transparent text-[14px] outline-none
                        ${ errors.name ? "border-red-600"  : "border-[#777]" }`}
                />

                {errors.name && (
                    <p className="mt-1 text-[12px] text-red-600">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email + Phone */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block pb-2 text-[14px] text-[#454545]">
                        E-mailadres{" "}
                        <span className="text-[#5b1111]">*</span>
                    </label>

                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        className={`h-7 w-full border-b bg-transparent text-[14px] outline-none lowercase 
                            ${ errors.email ? "border-red-600" : "border-[#777]" }`}
                    />

                    {errors.email && (
                    <p className="mt-1 text-[12px] text-red-600">
                        {errors.email.message}
                    </p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block pb-2 text-[14px] text-[#454545]" >
                        Telefoonnummer{" "}
                        <span className="text-[#5b1111]">*</span>
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        className={`h-7 w-full border-b bg-transparent text-[14px] outline-none 
                            ${ errors.phone ? "border-red-600" : "border-[#777]" }`}
                    />

                    {errors.phone && (
                    <p className="mt-1 text-[12px] text-red-600">
                        {errors.phone.message}
                    </p>
                    )}
                </div>
            </div>

            {/* Message */}
            <div className="mt-7">
                <label  htmlFor="message" className="block pb-2 text-[14px] text-[#454545]" >
                    Vertel ons kort over je idee{" "}
                    <span className="text-[#5b1111]">*</span>
                </label>

                <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`mt-2 block w-full resize-none border-b bg-transparent text-[14px] outline-none 
                        ${ errors.message ? "border-red-600" : "border-[#777]"}`}
                />

                {errors.message && (
                    <p className="mt-1 text-[12px] text-red-600">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[30px] min-w-[90px] bg-[#280505] px-5 text-[14px] capitalize text-white transition-colors hover:bg-[#430909] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "Verzenden..." : "Indienen"}
                </button>
            </div>

            {/* Success */}
            {submitStatus === "success" && (
                <p className="mt-4 text-[14px] text-green-700">
                    Bedankt! Uw bericht is succesvol verzonden.
                </p>
            )}

            {/* Error */}
            {submitStatus === "error" && (
                <p className="mt-4 text-[14px] text-red-700">
                   Er is iets misgegaan. Probeer het later opnieuw.
                </p>
            )}
        </form>
    </>
  );
};

export default ContactForm;
