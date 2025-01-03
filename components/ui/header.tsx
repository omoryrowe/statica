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
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
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
          <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
            <ul className="flex items-center gap-6 text-lg text-gray-300">
              <li className="relative group">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="relative group">
                <button className="hover:text-white">About</button>
                <ul className="absolute hidden group-hover:block top-full left-0 w-52 rounded-lg bg-gray-800 shadow-lg z-50">
                  <li>
                    <Link href="/about/our-story" className="block px-5 py-3 hover:bg-gray-700 text-base">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/about/behind-statica" className="block px-5 py-3 hover:bg-gray-700 text-base">Behind Statica</Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="hover:text-white">Portfolios</button>
                <ul className="absolute hidden group-hover:block top-full left-0 w-72 rounded-lg bg-gray-800 shadow-lg z-50">
                  <li>
                    <Link href="/portfolios/graphic-design" className="block px-5 py-3 hover:bg-gray-700 text-base">Graphic Design</Link>
                    <ul className="ml-4">
                      <li>
                        <Link href="/portfolios/graphic-design#logos" className="block px-5 py-2 hover:bg-gray-700 text-base">Logos</Link>
                      </li>
                      <li>
                        <Link href="/portfolios/graphic-design#flyers" className="block px-5 py-2 hover:bg-gray-700 text-base">Flyers</Link>
                      </li>
                      <li>
                        <Link href="/portfolios/graphic-design#custom-graphics" className="block px-5 py-2 hover:bg-gray-700 text-base">Custom Graphics</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/portfolios/web-software" className="block px-5 py-3 hover:bg-gray-700 text-base">Web & Software</Link>
                    <ul className="ml-4">
                      <li>
                        <Link href="/portfolios/web-software#websites" className="block px-5 py-2 hover:bg-gray-700 text-base">Websites</Link>
                      </li>
                      <li>
                        <Link href="/portfolios/web-software#software" className="block px-5 py-2 hover:bg-gray-700 text-base">Software Development</Link>
                      </li>
                      <li>
                        <Link href="/portfolios/web-software#automation" className="block px-5 py-2 hover:bg-gray-700 text-base">Automation</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="hover:text-white">Request Services</button>
                <ul className="absolute hidden group-hover:block top-full left-0 w-56 rounded-lg bg-gray-800 shadow-lg z-50">
                  <li>
                    <Link href="/request-services/pricing-plans" className="block px-5 py-3 hover:bg-gray-700 text-base">Pricing & Plans</Link>
                  </li>
                  <li>
                    <Link href="/request-services/request-quote" className="block px-5 py-3 hover:bg-gray-700 text-base">Request a Quote</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Get a Quote button */}
          <div className="flex items-center ml-8">
            <Link
              href="/request-services/request-quote"
              className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-2 px-4 text-base text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav className="space-y-6 px-4 py-6 bg-gray-800 text-gray-300">
            <Link
              href="/"
              className="block hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2">
              <button
                onClick={() => toggleSubMenu("about")}
                className="flex w-full justify-between items-center hover:text-white"
              >
                About
                <span className="ml-2">{openSubMenu === "about" ? "-" : "+"}</span>
              </button>
              {openSubMenu === "about" && (
                <ul className="ml-6 mt-2 space-y-3">
                  <li>
                    <Link
                      href="/about/our-story"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/behind-statica"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
                    <Link
                      href="/portfolios/graphic-design"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolios/web-software"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
                    <Link
                      href="/request-services/pricing-plans"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pricing & Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/request-services/request-quote"
                      className="block hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
