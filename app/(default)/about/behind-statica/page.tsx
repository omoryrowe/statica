"use client";

import Image from "next/image";
import FeaturesImage from "@/public/images/statica/Statica Logo White Cropped.png";

export default function BehindStatica() {
    return (
        <div>
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4" aria-hidden="true">
                <Image
                    className="max-w-none"
                    src="/images/page-illustration.svg"
                    width={846}
                    height={594}
                    alt="Page illustration"
                />
            </div>

            <section className="relative py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                Behind Statica
                            </span>
                        </div>
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            Meet the Founder
                        </h1>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent">
                            Discover the story of Omory Rowe, the visionary behind Statica, whose passion for design and technology led to the creation of a company that transforms ideas into impactful realities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative py-12 md:py-20 -mt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div data-aos="fade-right">
                            <Image
                                className="rounded-lg shadow-lg"
                                src="/images/statica/statica founder.jpg"
                                width={500}
                                height={500}
                                alt="Omory Rowe"
                            />
                        </div>
                        <div data-aos="fade-left">
                            <h1 className="font-semibold animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-3xl font-nacelle text-transparent">
                                Omory Rowe: Behind Statica
                            </h1>
                            <p className="-mt-4 text-indigo-200 text-base">
                                Omory's journey began with a love for both creativity and technology. A soon-to-be graduate in Computer Science from the
                                University of Central Florida, Omory combined his technical expertise in programming and automation with a deep passion for
                                graphic design. Recognized for academic excellence and leadership, he honed his skills through internships, awards, and
                                ambitious projects that showcased his dedication to innovation and impact.
                            </p>
                            <p className="mt-4 text-indigo-200 text-base">
                                While excelling in roles like Programming, Data Infrastructure, and Automation, Omory’s creative talents flourished.
                                He leveraged tools like Python, JavaScript, and Adobe Photoshop to craft meaningful solutions, from automating workflows
                                for Orlando Utilities Commission to designing impactful visual content for numerous clients. His work—marked by precision,
                                creativity, and attention to detail—naturally evolved into the foundation of Statica.
                            </p>
                            <p className="mt-4 text-indigo-200 text-base">
                                Statica was born from Omory’s vision to merge the technical and artistic worlds. Whether designing captivating logos,
                                promotional materials, or developing user-friendly websites, Omory’s mission has always been clear: empower businesses
                                and individuals to shine their brightest.
                            </p>
                            <div className="flex justify-center mt-6">
                                <div
                                    className="p-2 rounded-sm animate-[gradient_5s_linear_infinite] bg-[length:200%_auto] bg-[linear-gradient(to_right,black,black,black,black,#564fdb,black,black,black,black)]"
                                >
                                    <Image
                                        className="max-w-none w-60 sm:w-80 md:w-96"
                                        src={FeaturesImage}
                                        width={600}
                                        height={200}
                                        alt="Features"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >
                            A Multifaceted Leader
                        </h2>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent">
                            Omory’s dedication to leadership extends beyond Statica. With a passion for empowering others, he has consistently excelled in roles that require vision, strategic thinking, and a commitment to community and professional growth.
                        </p>
                    </div>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div data-aos="fade-right">
                            <h3 className="font-semibold animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                            >Leadership and Professional Development</h3>
                            <p className="-mt-4 text-indigo-200/65">
                                As a Career Preparation Fellow with Management Leadership for Tomorrow, Omory is part of
                                a prestigious 18-month professional development program. This opportunity has allowed him
                                to work closely with industry leaders, complete rigorous case studies, and develop critical
                                skills in leadership, business strategy, and technology.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <h3 className="font-semibold animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                            >Service and Community Impact</h3>
                            <p className="-mt-4 text-indigo-200/65">
                                Omory’s leadership extended to his role as Chapter President of Iota Phi Theta Fraternity,
                                Inc., where he spearheaded initiatives that earned the organization recognition as UCF’s
                                Service Organization of the Year. Under his guidance, the chapter completed over 400 service
                                hours, leading impactful community projects like youth mentorship programs and city clean-up
                                initiatives.
                            </p>
                        </div>
                        <div data-aos="fade-right">
                            <h3 className="font-semibold animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                            >Board Representation</h3>
                            <p className="-mt-4 text-indigo-200/65">
                                Serving as an Undergraduate Representative on the Board of Directors for Iota Phi Theta’s
                                national organization, Omory actively contributes to shaping policies and decisions that
                                affect over 75,000 collegiate members. His advocacy for student needs demonstrates his
                                dedication to uplifting others while ensuring inclusivity and growth within the organization.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <h3 className="font-semibold animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent"
                            >Inspiring Future Leaders</h3>
                            <p className="-mt-4 text-indigo-200/65">
                                Beyond his professional roles, Omory is committed to mentoring and inspiring future leaders.
                                Through workshops, presentations, and one-on-one mentorship, he shares his journey and insights
                                to motivate others to pursue excellence in both personal and professional endeavors.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="flex justify-center mt-12">
                        <a
                            className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                            href="../portfolios/web-software"
                        >
                            <span className="relative inline-flex items-center">
                                See Omory's Projects
                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                    -&gt;
                                </span>
                            </span>
                        </a>
                    </div>

                </div>
            </section>

            <section className="relative py-12 md:py-20 -mt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >
                            Spark Your Own Vision
                        </h2>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent">
                            Be part of the story that fuels Statica. Collaborate with us and experience the perfect blend of innovation, creativity, and excellence to bring your vision to life.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="flex justify-center">
                        <a
                            className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                            href="../request-services/pricing-plans"
                        >
                            <span className="relative inline-flex items-center">
                                Spark Your Vision
                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                    -&gt;
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

