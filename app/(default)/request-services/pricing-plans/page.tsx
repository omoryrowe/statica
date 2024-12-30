"use client";

import { useState } from "react";
import Image from "next/image";
import FeaturesImage from "@/public/images/statica/Statica Logo White Cropped.png";

interface Tier {
    name: string;
    price: string;
    features: string[];
    idealFor?: string;
}

interface Plan {
    title: string;
    tiers: Tier[];
}

const PricingPlans = () => {
    const [plans] = useState<Plan[]>([
        {
            title: "Logos",
            tiers: [
                {
                    name: "Starter Tier",
                    price: "$79",
                    features: [
                        "One initial concept",
                        "Flat 2D Text Design",
                        "One round of revisions",
                        "Delivery of essential files (JPEG, PNG, PDF)",
                    ],
                },
                {
                    name: "Pro Tier",
                    price: "$149",
                    features: [
                        "Two to three initial concepts",
                        "Two rounds of revisions",
                        "3D Text Design or Simple Custom Graphic Design",
                        "Delivery of essential files (JPEG, PNG, PDF)",
                        "Vector file delivery (SVG)",
                        "Logo variations (color scheme, backgrounds, transparency)",
                    ],
                },
                {
                    name: "Elite Tier",
                    price: "$299",
                    features: [
                        "Four to five custom concepts",
                        "3D Text Design + Advanced Custom Graphic Design",
                        "Unlimited revisions",
                        "Delivery of essential files (JPEG, PNG, PDF)",
                        "Vector file delivery (SVG)",
                        "Logo variations (color scheme, backgrounds, transparency)",
                        "Brand guidelines (fonts, colors, usage rules)",
                    ],
                },
            ],
        },
        {
            title: "Promotional Flyers",
            tiers: [
                {
                    name: "Starter Tier",
                    price: "$39",
                    features: [
                        "Flat, basic design",
                        "One round of revisions",
                        "Delivery in PNG, JPG, or PDF Format",
                        "Statica Watermark",
                    ],
                },
                {
                    name: "Pro Tier",
                    price: "$69",
                    features: [
                        "Advanced design (3D, light overlays, custom background)",
                        "Two rounds of revisions",
                        "Delivery in PNG, JPG, and PDF Formats",
                        "No Watermark",
                    ],
                },
                {
                    name: "Elite Tier",
                    price: "$99",
                    features: [
                        "Advanced design (3D, light overlays, custom background)",
                        "Custom illustrations or graphics",
                        "Unlimited revisions",
                        "Delivery in PNG, JPG, and PDF Formats",
                        "Editable file delivery (PSD)",
                        "Print-ready optimization",
                        "No Watermark",
                    ],
                },
            ],
        },
        {
            title: "Custom Graphics",
            tiers: [
                {
                    name: "Starter Tier",
                    price: "$59",
                    features: [
                        "One graphic tailored for one platform",
                        "1-2 basic revisions",
                        "Delivery in PNG, JPG, or PDF Format",
                        "Statica Watermark",
                    ],
                },
                {
                    name: "Pro Tier",
                    price: "$99",
                    features: [
                        "Up to three revisions",
                        "Delivery in PNG, JPG, and PDF Formats",
                        "Graphics optimized for specific platforms (e.g., Instagram, LinkedIn)",
                        "No Watermark",
                    ],
                },
                {
                    name: "Elite Tier",
                    price: "$149",
                    features: [
                        "Advanced design (3D, Light Overlays, Custom Background, etc.)",
                        "Complex illustrations and graphics (not hand drawn)",
                        "Unlimited revisions",
                        "Delivery in PNG, JPG, and PDF Formats",
                        "Editable file delivery (PSD)",
                        "Graphics optimized for specific platforms (e.g., Instagram, LinkedIn)",
                        "Print-ready optimization",
                        "No Watermark",
                    ],
                },
            ],
        },
        {
            title: "Websites",
            tiers: [
                {
                    name: "Starter Tier",
                    price: "$299",
                    features: [
                        "Simple one-page website (landing page or portfolio)",
                        "Responsive design",
                        "One round of revisions",
                        '"Created by Statica" watermark in footer"',
                    ],
                },
                {
                    name: "Pro Tier",
                    price: "$599",
                    features: [
                        "Multi-page website (3–5 pages)",
                        "Custom design with basic interactivity",
                        "Two rounds of revisions",
                        "Maintenance and support for one week",
                        "No Watermark",
                    ],
                },
                {
                    name: "Elite Tier",
                    price: "$999",
                    features: [
                        "Multi-page website (up to 7 pages)",
                        "Custom Design and Website Animations",
                        "Unlimited Revisions",
                        "Full Brand Integration",
                        "E-commerce functionality or advanced interactions",
                        "Maintenance and support for one month",
                        "Website SEO and analytics setup",
                        "No Watermark",
                    ],
                },
                {
                    name: "Corporate Tier",
                    price: "$1499+",
                    features: [
                        "Full Stack Web Application with User Database Integration",
                        "Custom Design and Website Animations",
                        "Unlimited Revisions",
                        "Full Brand Integration",
                        "E-commerce functionality or advanced interactions",
                        "Maintenance and support for two months",
                        "Website SEO and analytics setup",
                        "No Watermark",
                        "Free Promotional Flyer",
                    ],
                },
            ],
        },
        {
            title: "Business Automation",
            tiers: [
                {
                    name: "Startup Tier",
                    price: "$499+",
                    features: [
                        "Automation of one simple process (e.g., email workflow, data entry, report generation)",
                        "Basic optimization of repetitive tasks to reduce manual effort",
                        "Comprehensive Setup/Usage Guide",
                        "Ongoing support for one month",
                    ],
                },
                {
                    name: "Enterprise Tier",
                    price: "$999+",
                    features: [
                        "Multi-step/Multi-platform workflow automation (advanced processes)",
                        "User-Friendly Documentation",
                        "Comprehensive Setup/Usage Guide",
                        "Video Tutorials/Training Videos",
                        "Ongoing tech support for two months",
                    ],
                },
            ],
        },
        {
            title: "Bundles",
            tiers: [
                {
                    name: "Branding Essentials Kit",
                    price: "$349",
                    features: [
                        "1 logo (Pro Tier: $149)",
                        "2 promotional flyers (Pro Tier: $138)",
                        "1 custom graphic (Pro Tier: $99)",
                        "Compared to $386",
                    ],
                    idealFor: "Ideal For: New businesses launching their brand.",
                },
                {
                    name: "Marketing Essentials Kit",
                    price: "$699",
                    features: [
                        "5 promotional flyers (Elite Tier: $495)",
                        "3 custom graphics (Pro Tier: $297)",
                        "Compared to $792",
                    ],
                    idealFor: "Ideal For: Businesses with frequent marketing needs.",
                },
                {
                    name: "Executive Launch Kit",
                    price: "$1,199",
                    features: [
                        "1 logo (Elite Tier: $299)",
                        "1 custom graphic (Elite Tier: $149)",
                        "1 advanced website (Elite Tier: $999)",
                        "Compared to $1,447",
                    ],
                    idealFor: "Ideal For: New businesses establishing their online presence and brand identity.",
                },
                {
                    name: "Social Media Booster Kit",
                    price: "$599",
                    features: [
                        "3 custom graphics (Advanced Tier: $447)",
                        "2 promotional flyers (Advanced Tier: $198)",
                        "Compared to $645",
                    ],
                    idealFor: "Ideal For: Influencers or brands focusing on social media campaigns.",
                },
            ],
        },
    ]);

    return (
        <div className="pricing-page mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4" aria-hidden="true">
                <Image
                    className="max-w-none"
                    src="/images/page-illustration.svg"
                    width={846}
                    height={594}
                    alt="Page illustration"
                />
            </div>

            <header className="text-center py-8 mt-10">
                <h1
                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                    data-aos="fade-up"
                >
                    Pricing & Plans
                </h1>
                <p
                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    Unlock the potential of your brand with our flexible and tailored design packages. Crafted for businesses of every size, Statica delivers creativity and value.
                </p>
                <p
                    className="-mt-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    *Prices may vary*
                </p>
            </header>
            
            <div className="space-y-16">
                {plans.map((plan: Plan, index: number) => (
                    <section key={index}>
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl md:text-4xl font-semibold text-transparent text-center mb-8"
                        >
                            {plan.title}
                        </h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {plan.tiers.map((tier: Tier, idx: number) => {
                                const oldPrice = tier.features
                                    .find((feature: string) => feature.includes("Compared to"))
                                    ?.replace("Compared to", "")
                                    .trim();
                                const filteredFeatures = tier.features.filter(
                                    (feature: string) => !feature.includes("Compared to")
                                );

                                const isBundle = plan.title === "Bundles";
                                const isCorporateTier = tier.name === "Corporate Tier";
                                const isStarterTier =
                                    plan.title === "Business Automation" && tier.name === "Startup Tier";
                                const isEnterpriseTier =
                                    plan.title === "Business Automation" && tier.name === "Enterprise Tier";

                                return (
                                    <div
                                        key={idx}
                                        className={`relative p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-md transition-transform duration-300 overflow-hidden group ${isBundle || isCorporateTier
                                                ? "hover:shadow-[0_0_30px_theme(colors.green.400)] group-hover:from-green-200/10 group-hover:via-green-400/10 group-hover:to-green-200/10"
                                                : isStarterTier
                                                    ? "hover:shadow-[0_0_20px_theme(colors.gray.400)] group-hover:from-gray-500/10 group-hover:via-gray-400/10 group-hover:to-gray-300/10"
                                                    : isEnterpriseTier
                                                        ? "hover:shadow-[0_0_20px_theme(colors.sky.400)] group-hover:from-sky-500/20 group-hover:via-sky-400/10 group-hover:to-sky-300/10"
                                                        : tier.name === "Pro Tier"
                                                            ? "hover:shadow-[0_0_20px_theme(colors.sky.400)] group-hover:from-sky-500/20 group-hover:via-sky-400/10 group-hover:to-sky-300/10"
                                                            : tier.name === "Elite Tier"
                                                                ? "hover:shadow-[0_0_40px_theme(colors.amber.400)] group-hover:from-yellow-500/30 group-hover:via-yellow-400/20 group-hover:to-yellow-300/30"
                                                                : ""
                                            }`}
                                    >
                                        <h3
                                            className={`text-2xl font-bold ${isBundle || isCorporateTier
                                                    ? "animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.300),theme(colors.green.200))] bg-[length:200%_auto] bg-clip-text text-transparent"
                                                    : isStarterTier
                                                        ? "animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.400),theme(colors.gray.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-transparent"
                                                        : isEnterpriseTier
                                                            ? "animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.sky.400),theme(colors.sky.300),theme(colors.sky.200))] bg-[length:200%_auto] bg-clip-text text-transparent"
                                                            : tier.name === "Pro Tier"
                                                                ? "animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.sky.400),theme(colors.sky.300),theme(colors.sky.200))] bg-[length:200%_auto] bg-clip-text text-transparent"
                                                                : tier.name === "Elite Tier"
                                                                    ? "animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.amber.400),theme(colors.yellow.500),theme(colors.amber.300))] bg-[length:250%_auto] bg-clip-text text-transparent font-extrabold"
                                                                    : "text-indigo-400"
                                                }`}
                                        >
                                            {tier.name}
                                        </h3>
                                        <p className="mt-2 text-3xl font-extrabold text-gray-200">
                                            {tier.price}
                                            {plan.title === "Bundles" && oldPrice && (
                                                <span className="ml-2 text-xl font-normal text-gray-400 line-through">
                                                    {oldPrice}
                                                </span>
                                            )}
                                        </p>
                                        <ul className="mt-4 space-y-2 text-gray-400">
                                            {filteredFeatures.map((feature: string, i: number) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="mr-2 text-indigo-400">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        {tier.idealFor && (
                                            <p className="mt-4 text-sm italic text-gray-500 text-center">
                                                {tier.idealFor}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20 mt-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                        data-aos="fade-up"
                    >
                        Ready To Spark Your Vision?
                    </h2>
                    <p
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        Request a quote now and our design team will bring your vision to life!
                    </p>
                    <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                        <div data-aos="fade-up" data-aos-delay={400}>
                            <a
                                className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                href="../request-services/request-quote"
                            >
                                <span className="relative inline-flex items-center">
                                    Get a Quote
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
};

export default PricingPlans;
