"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EventTracker from "@/components/event-tracker";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({
      once: true,
      disable: reduce,
      duration: reduce ? 0 : 500,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <EventTracker />
      <main className="relative flex grow flex-col pt-16">{children}</main>
      <Footer />
    </>
  );
}
