"use client";

import Image from "next/image";

export default function OurStory() {
    return (
        <div>
            <title>Our Story</title>
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
                                Where Creativity Meets Innovation
                            </span>
                        </div>
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            Our Story
                        </h1>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent">
                            Statica began with a simple belief: every idea deserves a creative spark to bring it
                            to life. Since our inception, we have been on a mission to help businesses and
                            individuals shine their brightest through exceptional graphic and web design.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                            <p className="text-indigo-200/65">
                                Our mission is to empower businesses and individuals by transforming their ideas
                                into stunning visual realities. Through exceptional design and innovation, we aim
                                to create impactful solutions that inspire and drive success.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                            <p className="text-indigo-200/65">
                                To be the premier creative agency known for redefining design excellence and
                                innovation, helping clients achieve their goals and make a lasting impact in
                                their industries.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Our Values</h3>
                            <p className="text-indigo-200/65">
                                We value creativity, excellence, and collaboration, striving to deliver designs
                                that inspire and connect. Integrity and innovation drive our commitment to
                                staying ahead in design and technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-12 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >
                            A Legacy of Excellence
                        </h2>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent">
                            Over the past four years, Statica has become a trusted name in custom graphic design and web development.
                            Clients have praised our ability to not only meet but exceed their expectations. Our team’s mastery of
                            Adobe Photoshop allows us to craft graphics that are both aesthetically pleasing and purpose-driven,
                            while our expertise in full-stack web development ensures that every website we create is functional,
                            modern, and uniquely tailored to our clients’ needs.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="flex justify-center">
                        <a
                            className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                            href="../portfolios/graphic-design"
                        >
                            <span className="relative inline-flex items-center">
                                See Our Work
                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                    -&gt;
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <Image
                    src="/images/secondary-illustration.svg"
                    width={1165}
                    height={1012}
                    alt="Secondary Illustration"
                />
            </div>

            <section className="relative overflow-hidden py-12 md:py-20 -mt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >
                            Our Philosophy
                        </h2>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent">
                            At Statica, we believe creativity is the heart of progress. Whether it’s a logo that captures the spirit of a brand
                            or a website that engages users, we approach every project with passion and dedication. We understand that every
                            client’s vision is unique, and we are committed to delivering designs that not only meet but elevate their expectations.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay={400} className="flex justify-center">
                        <a
                            className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                            href="../about/behind-statica"
                        >
                            <span className="relative inline-flex items-center">
                                Meet The Founder
                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                    -&gt;
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-12 md:py-20 -mt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center">
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >
                            Join Our Story
                        </h2>
                        <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-xl font-nacelle text-transparent">
                            Statica’s journey is fueled by the passion and trust of our clients. As we look to the future,
                            we remain committed to pushing the boundaries of design and technology to help more businesses
                            achieve their goals. With every project, we strive to leave a lasting mark that reflects our
                            dedication to quality and creativity. We invite you to be a part of Statica’s story. Whether
                            you need a stunning graphic or a cutting-edge website, we’re here to make your vision a reality.
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
