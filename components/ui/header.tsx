"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative flex h-16 items-center justify-between gap-4 rounded-2xl bg-gray-900/90 px-4 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-none items-center w-1/5">
            <Logo />
          </div>

          {/* Navigation menu */}
          <nav className="flex flex-1 items-center justify-end gap-6">
            <ul className="flex items-center gap-6 text-lg text-gray-300">
              <li className="relative group">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="relative group">
                <button className="hover:text-white">About</button>
                <ul className="absolute hidden group-hover:block top-full w-52 rounded-lg bg-gray-800 shadow-lg">
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
                <ul className="absolute hidden group-hover:block top-full w-72 rounded-lg bg-gray-800 shadow-lg">
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
                <ul className="absolute hidden group-hover:block top-full w-56 rounded-lg bg-gray-800 shadow-lg">
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
          <div className="flex items-center">
            <Link
              href="/request-services/request-quote"
              className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-2 px-4 text-base text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]" // Adjusted button padding and font size
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
