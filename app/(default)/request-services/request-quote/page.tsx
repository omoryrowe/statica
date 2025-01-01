"use client";

import { useState } from "react";

export default function GetAQuote() {
    const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formErrors, setFormErrors] = useState<string | null>(null);

    const pricingPlans = [
        "Logos - Starter Tier ($79)",
        "Logos - Pro Tier ($149)",
        "Logos - Elite Tier ($299)",
        "Promotional Flyers - Starter Tier ($39)",
        "Promotional Flyers - Pro Tier ($69)",
        "Promotional Flyers - Elite Tier ($99)",
        "Custom Graphics - Starter Tier ($59)",
        "Custom Graphics - Pro Tier ($99)",
        "Custom Graphics - Elite Tier ($149)",
        "Websites - Starter Tier ($299)",
        "Websites - Pro Tier ($599)",
        "Websites - Elite Tier ($999)",
        "Websites - Corporate Tier ($1499+)",
        "Business Automation - Startup Tier ($499+)",
        "Business Automation - Enterprise Tier ($999+)",
        "Bundles - Branding Essentials Kit ($349)",
        "Bundles - Marketing Essentials Kit ($699)",
        "Bundles - Executive Launch Kit ($1,199)",
        "Bundles - Social Media Booster Kit ($599)",
    ];

    const handleIncrease = (item: string) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [item]: (prevSelectedItems[item] || 0) + 1,
        }));
    };

    const handleDecrease = (item: string) => {
        setSelectedItems((prevSelectedItems) => {
            const newCount = (prevSelectedItems[item] || 0) - 1;
            if (newCount <= 0) {
                const { [item]: _, ...rest } = prevSelectedItems;
                return rest;
            }
            return {
                ...prevSelectedItems,
                [item]: newCount,
            };
        });
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as any;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const projectDetails = form["project-details"].value.trim();

        // Validate email and required fields
        if (!name || !email || !projectDetails || Object.keys(selectedItems).length === 0) {
            setFormErrors("All fields are required, and at least one package must be selected.");
            return;
        }

        if (!isValidEmail(email)) {
            setFormErrors("Please enter a valid email address.");
            return;
        }

        // Clear errors and prepare form data
        setFormErrors(null);
        const formData = {
            name,
            email,
            selectedItems,
            projectDetails,
        };

        try {
            const response = await fetch("/api/sendQuoteEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Quote request sent successfully!");
                form.reset();
                setSelectedItems({});
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error sending quote request:", error);
            alert("Failed to send quote request. Please try again.");
        }
    };

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="pb-12 text-center">
                        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-5xl font-semibold text-transparent md:text-4xl">
                            Get Your Custom Quote
                        </h1>
                        <p className="mt-4 text-xl text-gray-400">
                            Fill out the form below, and we’ll get back to you with a tailored proposal for your needs.
                        </p>
                    </div>
                    <form className="mx-auto max-w-[500px]" onSubmit={handleSubmit}>
                        {formErrors && (
                            <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-600">
                                {formErrors}
                            </div>
                        )}
                        <div className="space-y-5">
                            <div>
                                <label
                                    className="mb-1 block text-xl font-medium text-indigo-200/65"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-input w-full"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-xl font-medium text-indigo-200/65"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-input w-full"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className={`relative ${isDropdownOpen ? "mb-40" : "mb-0"}`}>
                                <label
                                    className="mb-1 block text-xl font-medium text-indigo-200/65"
                                    htmlFor="pricing-plans"
                                >
                                    Select Packages
                                </label>
                                <button
                                    type="button"
                                    className="form-input w-full cursor-pointer bg-gray-900 text-indigo-400 shadow-sm"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {Object.keys(selectedItems).length > 0
                                        ? Object.entries(selectedItems)
                                            .map(([item, count]) => `${item} x${count}`)
                                            .join(", ")
                                        : "Choose your packages"}
                                </button>
                                {isDropdownOpen && (
                                    <div className="mt-2 w-full rounded-lg bg-gray-900 text-gray-200 shadow-lg">
                                        <ul className="max-h-60 overflow-auto p-4">
                                            {pricingPlans.map((plan) => (
                                                <li
                                                    key={plan}
                                                    className="flex items-center justify-between gap-4 text-sm text-indigo-400 mt-1"
                                                >
                                                    <span>{plan}</span>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            type="button"
                                                            className="px-1 py-0.5 bg-indigo-600 text-white rounded"
                                                            onClick={() => handleDecrease(plan)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-gray-200">
                                                            {selectedItems[plan] || 0}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="px-1 py-0.5 bg-indigo-600 text-white rounded"
                                                            onClick={() => handleIncrease(plan)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-xl font-medium text-indigo-200/65"
                                    htmlFor="project-details"
                                >
                                    Project Details
                                </label>
                                <textarea
                                    id="project-details"
                                    rows={5}
                                    className="form-textarea w-full"
                                    placeholder="Describe your vision for the requested services"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-6 space-y-5">
                            <button
                                type="submit"
                                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-sm hover:bg-gradient-to-b"
                            >
                                Request Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
