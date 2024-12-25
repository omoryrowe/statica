"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImgMale from "@/public/images/testimonial-male.png";
import TestimonialImgFemale from "@/public/images/testimonial-female.png";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";

const testimonials = [
  {
    img: TestimonialImgMale,
    name: "Marcus W.",
    company: "Vatt Media Marketing",
    content: (
      <>
        I recently had the pleasure of working with Statica on a new website for my business, and I couldn’t be happier with the results.
        Statica's graphic design skills are top-notch, bringing a fresh and modern look to my online presence that truly resonates with my audience.
        His attention to detail and commitment to delivering a quality product are unmatched.
        <br />
        <br />
        The website is not only visually stunning but also user-friendly, making it easy for my customers to navigate and find what they need.
        Since launching the new site, I've noticed a significant increase in client inquiries and conversions.
        The professional and attractive digital presence that Statica created has been instrumental in helping me attract and retain more clients.
        <br />
        <br />
        If you're looking for a talented and reliable graphic designer, I highly recommend Statica.
        He’s not just a designer; he’s a creative partner who genuinely cares about your vision and business success.
      </>
    ),
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImgMale,
    name: "Dwight D.",
    company: "Tuftalot",
    content:
      "Statica’s work is amazing! Have been working with them over 2 years, and the production only gets better. " +
      "Pays close attention to detail, very responsive and works hard to bring your exact idea to life",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg03,
    name: "Lucy D.",
    company: "Rio",
    content:
      "Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",
    categories: [1, 3, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            Discover the stories of our clients and their transformative journeys
            with Statica. See firsthand how our designs have brought their visions
            to life and exceeded their expectations.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3" ref={masonryContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: React.ReactNode;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
