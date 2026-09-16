"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { QUOTE_PATH, RELAY_PATH } from "@/lib/site";

const links = [
  { href: "/websites", label: "Websites" },
  { href: RELAY_PATH, label: "Relay" },
  { href: "/work", label: "Work" },
  { href: "/request-services/pricing-plans", label: "Packages" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-line/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative py-1 text-sm font-medium transition after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-bolt after:transition-all hover:after:w-full ${
                pathname === link.href
                  ? "text-bolt after:w-full"
                  : "text-mist after:w-0 hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href={QUOTE_PATH} className="btn-sm btn-primary" data-event="quote-cta">
            Get My Quote
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-ink-line bg-ink px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-11 rounded-md px-2 py-3 text-base text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={QUOTE_PATH}
                className="btn-primary mt-2 flex w-full"
                onClick={() => setOpen(false)}
                data-event="quote-cta"
              >
                Get My Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
