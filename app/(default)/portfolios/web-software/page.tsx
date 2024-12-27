"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";

interface Section {
    title: string;
    folder: string;
    images: string[];
    cover: string;
    hash: string;
    projects: Project[];
}

interface Project {
    title: string;
    category: string;
    description: string;
    client: {
        name: string;
        services: string;
    };
    tools: string[];
    images?: string[];
    shareLink?: string;
}

export default function PortfolioHome() {
    const [sections, setSections] = useState<Section[]>([
        {
            title: "Websites",
            folder: "websites",
            images: [],
            cover: "/images/statica/web cover 1.png",
            hash: "websites",
            projects: [
                {
                    title: "Non-Profit Organization Website",
                    category: "UI / Frontend",
                    description: "We created a responsive and engaging website for FleriLab, " +
                        "a non- profit organization dedicated to empowering underserved communities. " +
                        "Using the Flat design template and Bootstrap 5, the site features a clean, " +
                        "modern layout with intuitive navigation to highlight FleriLab’s mission, programs, " +
                        "and impact. Built with HTML, CSS, JavaScript, and TypScript, enhanced by TailwindCSS " +
                        ", and launched with React & Next.js for interactivity, the website ensures accessibility and responsiveness across all " +
                        "devices. The platform effectively promotes donations, volunteer opportunities, and " +
                        "event participation, fostering stronger connections with supporters.",
                    client: {
                        name: "FleriLab",
                        services: "UI Design & Frontend Development",
                    },
                    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    images: ["/images/projects/fleri1.png","/images/projects/fleri2.png"],
                },
                {
                    title: "Statica Design Agency Website",
                    category: "UI / Frontend",
                    description: "We developed a dynamic and visually stunning website for Statica, a design agency " +
                        "committed to helping businesses market their brands effectively. Leveraging modern web " +
                        "technologies, the platform showcases Statica’s portfolio, services, and mission through a " +
                        "clean, intuitive, and responsive design. Using HTML, CSS, JavaScript, and TypeScript, " +
                        "enhanced with TailwindCSS, the website was crafted with a focus on interactivity and " +
                        "performance. Built with React and Next.js, it offers seamless navigation and accessibility " +
                        "across all devices. The platform highlights Statica’s dedication to creativity and innovation" +
                        ", promoting client engagement through detailed project showcases, service breakdowns, and an " +
                        "integrated contact system to facilitate collaboration opportunities.",
                    client: {
                        name: "Statica",
                        services: "UI Design & Frontend Development",
                    },
                    tools: ["HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS", "React", "Next.js"],
                    images: ["/images/projects/statica1.png", "/images/projects/statica2.png"],
                },
                {
                    title: "FileMorph UI: Intuitive File Conversion Interface",
                    category: "Frontend Development",
                    description: "FileMorph UI delivers a sleek and user-friendly interface designed for seamless interaction " +
                        "with FileMorph's backend functionalities. Built with Bootstrap and jQuery, the interface provides dynamic " +
                        "responsiveness, intuitive navigation, and real-time status updates. This frontend solution simplifies " +
                        "complex file conversion workflows, ensuring users can manage file transformations effortlessly. The " +
                        "design focuses on accessibility, adaptability across devices, and enhancing overall user satisfaction.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "UI/UX Design & Frontend Implementation",
                    },
                    tools: ["Bootstrap", "jQuery", "HTML", "CSS", "JavaScript"],
                },
            ],
        },
        {
            title: "Software Development",
            folder: "software-development",
            images: [],
            cover: "/images/statica/web cover 2.png",
            hash: "software",
            projects: [
                {
                    title: "GameGrid",
                    category: "Full Stack Development",
                    description: "GameGrid is a feature-rich video game forum designed to connect gamers through " +
                        "an intuitive and interactive platform. Built using the MERN stack, the platform includes " +
                        "functionalities such as account management, friend requests, game libraries, reviews, and " +
                        "ratings, with seamless mobile integration. The objective was to create a dynamic and user-friendly " +
                        "video game forum that fosters community interaction and streamlines user experiences with advanced " +
                        "features and optimized performance. Developed 16 REST APIs to enable core functionalities, including user account login " +
                        "and registration, friend requests, game library management, and game reviews and ratings. Integrated email " +
                        "verification using Nodemailer and OAuth to enhance user security. The website was deployed using Heroku " +
                        "CLI and GitHub, ensuring seamless continuous integration and development (CI/CD) workflows with a team " +
                        "of six developers. Performance optimization reduced the runtime of the review feature from O(n) to O(1), " +
                        "greatly improving efficiency and scalability. Additionally, integration testing with JEST ensured the " +
                        "platform's reliability and stability, delivering a robust user experience.",
                    client: {
                        name: "Hidden for privacy",
                        services: "Backend API Design & Full Stack Development",
                    },
                    tools: ["JavaScript", "REST APIs", "Express.js", "MongoDB", "MySQL", "Git", "IaaS Cloud Computing", "Nodemailer", "OAuth", "JEST", "Heroku CLI", "GitHub"],
                    images: ["/images/projects/gamegrid1.jpg", "/images/projects/gamegrid2.jpg", "/images/projects/gamegrid3.jpg", "/images/projects/gamegrid4.jpg"],
                },
                {
                    title: "FileMorph Core: Secure File Conversion Backend",
                    category: "Backend Development",
                    description: "FileMorph Core is the robust backend engine powering secure and automated file conversion " +
                        "processes. Developed with Python and Flask, it identifies outdated Microsoft Office files and converts " +
                        "them into modern formats, ensuring compliance with organizational standards. Integrated with the " +
                        "Windows Defender API, the backend provides real-time malicious file detection, enhancing system " +
                        "security. Enterprise schedulers like Control-M enable automated daily execution, streamlining " +
                        "workflows while maintaining high operational efficiency.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Backend API Design & Workflow Automation",
                    },
                    tools: ["Python", "Flask", "Control-M", "Windows Defender API", "Workflow Automation"],
                },
            ],
        },
        {
            title: "Automation",
            folder: "automation",
            images: [],
            cover: "/images/statica/web cover 3.png",
            hash: "automation",
            projects: [
                {
                    title: "FileMorph Automation: Streamlined Workflow Execution",
                    category: "Automation & Workflow Management",
                    description: "FileMorph Automation enhances operational efficiency by integrating automated " +
                        "workflows for daily file conversion and security tasks. Leveraging enterprise schedulers " +
                        "like Control-M, the system executes Python-based scripts that identify, convert, and secure " +
                        "outdated Microsoft Office files autonomously. The integration ensures consistent compliance " +
                        "with organizational standards and minimizes manual intervention. Additionally, the use of " +
                        "Workflow Automation tools allows seamless scalability and adaptability to evolving operational needs.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Workflow Automation & Scheduling Integration",
                    },
                    tools: ["Control-M", "Workflow Automation", "Python", "Windows Defender API", "Enterprise Scheduling"],
                },
                {
                    title: "Script Optimization: Legacy Perl to Python",
                    category: "Automation",
                    description: "Rewrote and optimized 19 outdated Perl scripts into Python, achieving a 57% reduction in " +
                        "runtime and a 60% decrease in code length on average. This optimization enhanced maintainability and " +
                        "significantly improved execution efficiency, reducing resource consumption and operational delays.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Script Modernization & Performance Optimization",
                    },
                    tools: ["Python", "Perl", "Control-M", "Workflow Automation", "Enterprise Scheduling"],
                },
                {
                    title: "Automated Billing Error Detection",
                    category: "Data Parsing & Automation",
                    description: "Designed and implemented a Python script to parse 270,000 monthly bills, identifying and " +
                        "flagging incorrect amounts for the business department. This automation streamlined error detection " +
                        "and reporting, saving time and improving accuracy in financial operations.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Data Parsing & Error Detection",
                    },
                    tools: ["Python", "Data Parsing", "Workflow Automation"],
                },
                {
                    title: "Business Process Automation",
                    category: "Workflow Automation",
                    description: "Automated 25 critical business processes using Python, covering functions such as marketing, " +
                        "data entry, and reporting. These automations improved accuracy, reduced manual effort, and significantly " +
                        "enhanced overall efficiency in operations.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Process Automation & Efficiency Enhancement",
                    },
                    tools: ["Python", "Workflow Automation", "Business Processes"],
                },
                {
                    title: "Automated Operations Reporting Workflow",
                    category: "Reporting Automation",
                    description: "Created an automated workflow to generate weekly status reports for the Operations & Tools Team. " +
                        "This streamlined report generation process ensured consistent updates, enhanced transparency, and improved task tracking for better team coordination.",
                    client: {
                        name: "Orlando Utilities Commission",
                        services: "Reporting Workflow Automation",
                    },
                    tools: ["Python", "Workflow Automation", "Operations Reporting"],
                },
            ],
        },
    ]);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [expandedProject, setExpandedProject] = useState<Project | null>(null);

    const toggleSection = (title: string) => {
        setSelectedSection(selectedSection === title ? null : title);
    };

    const expandProject = (project: Project) => {
        setExpandedProject(project);
    };

    const closeExpandedProject = () => {
        setExpandedProject(null);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            const section = sections.find((s) => s.hash === hash);
            if (section) {
                setSelectedSection(section.title);
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [sections]);

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
                    Innovating Through Technology
                </h1>
                <div className="mx-auto max-w-4xl">
                    <p
                        className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text mb-8 text-2xl font-nacelle text-transparent"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        Discover our expertise in creating dynamic websites, powerful software, and seamless automation solutions tailored to meet your needs.
                    </p>
                </div>
            </div>
            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 -mt-10">
                {sections.map((section, index) => (
                    <div key={index} id={section.hash}>
                        <a
                            href={`#${section.hash}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSection(section.title);
                            }}
                            className={`group relative block rounded-2xl overflow-hidden ${selectedSection === section.title
                                ? "border-2 border-indigo-500 bg-gray-800/50"
                                : "border-2 border-transparent"
                                } transition-all duration-300`}
                        >
                            <div className="relative z-10 bg-gray-800">
                                <Image
                                    src={section.cover}
                                    alt={`${section.title} Cover`}
                                    width={500}
                                    height={350}
                                    className="rounded-t-2xl"
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
                                        {section.title === "Websites"
                                            ? "Crafting responsive and visually appealing websites that elevate your online presence."
                                            : section.title === "Software Development"
                                                ? "Developing robust software solutions to streamline your processes and enhance productivity."
                                                : "Automating repetitive tasks to save time and boost efficiency."}
                                    </p>
                                </div>
                            </div>
                        </a>
                        {selectedSection === section.title && (
                            <div className="mt-4 space-y-4">
                                {section.projects.map((project) => (
                                    <div
                                        key={project.title}
                                        className="rounded bg-gray-900 p-4 shadow cursor-pointer hover:bg-gray-800"
                                        onClick={() => expandProject(project)}
                                    >
                                        <h3 className="text-lg font-semibold text-indigo-400 ">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300">{project.category}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </Spotlight>

            {expandedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
                    <div className="relative bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-full overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl font-bold"
                            onClick={closeExpandedProject}
                        >
                            ×
                        </button>
                        <ProjectDetailsCard {...expandedProject} />
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
