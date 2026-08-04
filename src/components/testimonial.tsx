import React from "react";
import testimonialImage from "@/assets/testimonial.png";

const TestimonialSection = () => {
  return (
    <section className="testimonial">
        <div className="container-wide">
            <div className="reveal mx-auto max-w-7xl py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left Content */}
                <div className="flex h-full flex-col justify-between">
                    <blockquote className="max-w-lg">
                    <p className="text-xl leading-[1.35] tracking-[-0.02em] text-neutral-900 sm:text-2xl lg:text-[1.75rem]">
                        “Ik geloof dat ideeën pas groeien wanneer je ze ruimte geeft. Oude Vismijn 1 is mijn manier om die ruimte mee mogelijk te maken in Lokeren.”
                    </p>
                    </blockquote>

                    <div className="mt-14 flex items-center justify-between">
                    <p className="text-sm text-neutral-700 sm:text-base">
                        <span className="font-medium">— Bert</span>
                        {/* <span className="mx-1">—</span> {designation} */}
                    </p>

                    {/* Slider Dots */}
                    <div className="flex items-center gap-2">
                        <span className="h-[2px] w-20 bg-neutral-300"></span>
                        <span className="h-[2px] w-8 bg-neutral-900"></span>
                        <span className="h-[2px] w-4 bg-neutral-300"></span>
                    </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="overflow-hidden">
                    <img
                    src={testimonialImage}
                    alt="Bert"
                    className="aspect-[4/3] w-full object-cover"
                    />
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSection;