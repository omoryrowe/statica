import Link from "next/link";
import Logo from "./logo";
import {
  MONTHLY_PATH,
  PRICING_PATH,
  PRIVACY_PATH,
  QUOTE_PATH,
  RELAY_PATH,
  SITE,
  TERMS_PATH,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-line bg-ink-raised">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bolt/50 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-mist">
            Custom website design and ongoing management, with personal service from
            start to finish.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-paper">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-mist hover:text-bolt" href="/websites">
                Website Design
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href="/work">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={RELAY_PATH}>
                Statica Relay
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={PRICING_PATH}>
                Packages
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={MONTHLY_PATH}>
                Website Management
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-paper">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-mist hover:text-bolt" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={QUOTE_PATH}>
                Get My Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-paper">Contact</h2>
          <a className="mt-3 block text-sm text-mist hover:text-bolt" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <p className="mt-1 text-sm text-mist">Based in Orlando, Florida.</p>
        </div>
      </div>
      <div className="border-t border-ink-line/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link className="hover:text-bolt" href={PRIVACY_PATH}>
              Privacy Policy
            </Link>
            <Link className="hover:text-bolt" href={TERMS_PATH}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
