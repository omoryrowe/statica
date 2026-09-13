import Link from "next/link";
import Logo from "./logo";
import { MONTHLY_PATH, PRICING_PATH, QUOTE_PATH, SITE } from "@/lib/site";

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
            Websites designed, built, and looked after by one person in {SITE.location}.
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
                Website Work
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={PRICING_PATH}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-mist hover:text-bolt" href={MONTHLY_PATH}>
                Monthly management
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
          <p className="mt-3 text-sm text-mist">{SITE.url.replace("https://", "")}</p>
          <p className="mt-1 text-sm text-mist">Based in {SITE.location}</p>
        </div>
      </div>
      <div className="border-t border-ink-line/70">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-mist sm:px-6">
          &copy; {new Date().getFullYear()} {SITE.name}. Built by {SITE.founder}.
        </p>
      </div>
    </footer>
  );
}
