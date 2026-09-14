import "./css/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Orlando Small Business Web Design | Statica Design Agency",
    template: "%s | Statica Design Agency",
  },
  description:
    "Professional websites for small businesses in Orlando, with ongoing maintenance and support. Custom websites from $750 + ongoing management from $99/month. Request your quote.",
  icons: { icon: "/images/statica/Statica Favicon Bolt.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-ink font-inter text-base text-paper antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
