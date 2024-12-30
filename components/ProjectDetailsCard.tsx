"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectDetailsCardProps {
    title: string;
    category: string;
    description: string;
    client: {
        name: string;
        services: string;
    };
    tools: string[];
    images?: string[]; // Optional images
    shareLink?: string;
}

const ProjectDetailsCard: React.FC<ProjectDetailsCardProps> = ({
    title,
    category,
    description,
    client,
    tools,
    images,
    shareLink,
}) => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const openImage = (image: string) => {
        setExpandedImage(image);
    };

    const closeImage = () => {
        setExpandedImage(null);
    };

    return (
        <div
            className="project-card border border-gray-300 rounded-lg shadow-lg p-4 mb-4 bg-gray-800 text-white cursor-pointer transition-transform hover:scale-105"
            onClick={(e) => {
                e.stopPropagation(); // Prevent unwanted propagation
            }}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    {title}
                </h3>
                <p className="text-sm">{category}</p>
            </div>

            <div className="mt-4">
                {images && images.length > 0 && (
                    <div className="mb-4">
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Project Image ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent card from collapsing
                                        openImage(image);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <h4 className="text-lg font-semibold mb-2">Client</h4>
                <p>
                    <strong>Company/Name:</strong> {client.name}
                </p>
                <p>
                    <strong>Services:</strong> {client.services}
                </p>

                <h4 className="text-lg font-semibold mt-4 mb-2">Description</h4>
                <p>{description}</p>

                <h4 className="text-lg font-semibold mt-4 mb-2">Tools & Technologies</h4>
                <ul className="list-disc list-inside">
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>

                {shareLink && (
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Share This</h4>
                        <a
                            href={shareLink}
                            className="text-indigo-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {shareLink}
                        </a>
                    </div>
                )}
            </div>

            {/* Modal for expanded image */}
            {expandedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <Image
                            src={expandedImage}
                            alt="Expanded Image"
                            width={1000}
                            height={700}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 shadow-lg"
                            onClick={closeImage}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailsCard;
