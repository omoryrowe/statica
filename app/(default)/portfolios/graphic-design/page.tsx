"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";

interface Section {
    title: string;
    folder: string;
    images: string[];
    cover: string;
    hash: string;
}

export default function PortfolioHome() {
    const [sections, setSections] = useState<Section[]>([
        {
            title: "Brand Logos",
            folder: "brand-logos",
            images: [],
            cover: "/images/brand-logos/Tuftalot Logo.jpg",
            hash: "logos",
        },
        {
            title: "Promotional Flyers",
            folder: "promotional-flyers",
            images: [],
            cover: "/images/promotional-flyers/Beach Cleanup.png",
            hash: "flyers",
        },
        {
            title: "Custom Designs",
            folder: "custom-designs",
            images: [],
            cover: "/images/custom-designs/Turban Ty P5000.png",
            hash: "custom-graphics",
        },
    ]);

    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const fetchImages = async () => {
            const updatedSections = await Promise.all(
                sections.map(async (section) => {
                    const response = await fetch(`/api/load-images?folder=${section.folder}`);
                    const data = await response.json();
                    return { ...section, images: data.files || [] };
                })
            );
            setSections(updatedSections);
        };
        fetchImages();
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const section = sections.find((s) => s.hash === hash);
            if (section) {
                setSelectedSection(section.title);

                const sectionRef = sectionRefs.current[hash];
                if (sectionRef) {
                    sectionRef.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [sections]);

    const handleDropdownClick = (hash: string) => {
        const section = sections.find((s) => s.hash === hash);
        if (section) {
            setSelectedSection(selectedSection === section.title ? null : section.title);
            window.location.hash = hash;

            const sectionRef = sectionRefs.current[hash];
            if (sectionRef) {
                sectionRef.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="portfolio-home mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4" aria-hidden="true">
                <Image
                    className="max-w-none"
                    src="/images/page-illustration.svg"
                    width={846}
                    height={594}
                    alt="Page illustration"
                />
            </div>
            <div className="pb-8 text-center md:pb-16 mt-20">
                <h1
                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                    data-aos="fade-up"
                >
                    Unleashing Creativity
                </h1>
                <div className="mx-auto max-w-4xl">
                    <p
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        Explore captivating designs that bring ideas to life, from iconic logos to impactful visuals that leave a lasting impression.
                    </p>
                </div>
            </div>
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 -mt-10">
                {sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#${section.hash}`}
                        className={`group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ${selectedSection === section.title ? "ring-4 ring-indigo-500" : ""
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleDropdownClick(section.hash);
                        }}
                    >
                        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                            <Image
                                src={section.cover}
                                alt={`${section.title} Cover`}
                                width={500}
                                height={350}
                                layout="responsive"
                                className="rounded"
                            />
                            <div className="p-6">
                                <div className="mb-3">
                                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xl font-normal hover:bg-gray-800/60">
                                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                            {section.title}
                                        </span>
                                    </span>
                                </div>
                                <p className="text-white">
                                    {section.title === "Brand Logos"
                                        ? "Crafting unique and memorable logos that encapsulate your brand’s essence."
                                        : section.title === "Promotional Flyers"
                                            ? "Designing eye-catching flyers, banners, and digital graphics tailored to your needs."
                                            : "Bringing creative ideas to life with custom designs."}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </Spotlight>

            {sections.map((section) => (
                <div
                    key={section.hash}
                    ref={(el) => {
                        sectionRefs.current[section.hash] = el;
                    }}
                    className={`gallery grid grid-cols-3 gap-4 mt-4 ${selectedSection === section.title ? "" : "hidden"
                        }`}
                >
                    {section.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${section.title} ${index + 1}`}
                            layout="responsive"
                            width={300}
                            height={200}
                            className="rounded shadow-md cursor-pointer"
                            onClick={() => setLightboxImage(image)}
                        />
                    ))}
                </div>
            ))}

            {lightboxImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-2xl font-bold pointer-events-auto"
                        onClick={() => setLightboxImage(null)}
                    >
                        ×
                    </button>
                    <div className="relative w-full h-full flex justify-center items-center pointer-events-none">
                        <Image
                            src={lightboxImage}
                            alt="Expanded View"
                            layout="intrinsic"
                            width={800} // Provide an arbitrary large width for Image
                            height={600} // Provide an arbitrary large height for Image
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                </div>
            )}
            <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20 mt-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                        data-aos="fade-up"
                    >
                        Like What You See?
                    </h2>
                    <p
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        Let’s bring your vision to life! Reach out to collaborate or
                        learn more about how we can help elevate your brand.
                    </p>
                    <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                        <div data-aos="fade-up" data-aos-delay={400}>
                            <a
                                className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                href="../request-services/pricing-plans"
                            >
                                <span className="relative inline-flex items-center">
                                    Pricing & Plans
                                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                        -&gt;
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
