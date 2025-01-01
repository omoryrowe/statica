"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <header className="w-full bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none md:hidden"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about/our-story" className="hover:text-white">
              About
            </Link>
            <Link href="/portfolios/graphic-design" className="hover:text-white">
              Portfolios
            </Link>
            <Link href="/request-services/pricing-plans" className="hover:text-white">
              Request Services
            </Link>
            <Link
              href="/request-services/request-quote"
              className="btn-sm bg-indigo-600 px-4 py-2 text-white rounded-md"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-6 px-4 py-6 bg-gray-800 text-gray-300">
            <Link href="/" className="block hover:text-white">
              Home
            </Link>
            <div className="space-y-2">
              <button
                onClick={() => toggleSubMenu("about")}
                className="flex w-full justify-between items-center hover:text-white"
              >
                About
                <span className="ml-2">
                  {openSubMenu === "about" ? "-" : "+"}
                </span>
              </button>
              {openSubMenu === "about" && (
                <ul className="ml-6 mt-2 space-y-3">
                  <li>
                    <Link href="/about/our-story" className="block hover:text-white">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/behind-statica" className="block hover:text-white">
                      Behind Statica
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => toggleSubMenu("portfolios")}
                className="flex w-full justify-between items-center hover:text-white"
              >
                Portfolios
                <span className="ml-2">
                  {openSubMenu === "portfolios" ? "-" : "+"}
                </span>
              </button>
              {openSubMenu === "portfolios" && (
                <ul className="ml-6 mt-2 space-y-3">
                  <li>
                    <Link href="/portfolios/graphic-design" className="block hover:text-white">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolios/web-software" className="block hover:text-white">
                      Web & Software
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => toggleSubMenu("services")}
                className="flex w-full justify-between items-center hover:text-white"
              >
                Request Services
                <span className="ml-2">
                  {openSubMenu === "services" ? "-" : "+"}
                </span>
              </button>
              {openSubMenu === "services" && (
                <ul className="ml-6 mt-2 space-y-3">
                  <li>
                    <Link href="/request-services/pricing-plans" className="block hover:text-white">
                      Pricing & Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/request-services/request-quote" className="block hover:text-white">
                      Request a Quote
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
