"use client";

import { useEffect, useState } from "react";

/**
 * Decorative light layer. The gradient renders immediately; the slow drift is
 * only attached once we know the visitor has not asked for reduced motion.
 */
export default function Ambient({ variant = "bold" }: { variant?: "bold" | "soft" }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div
      aria-hidden
      className={[
        "aurora",
        variant === "soft" ? "aurora-soft" : "",
        animate ? (variant === "soft" ? "animate-drift-slow" : "animate-drift") : "",
      ].join(" ")}
    />
  );
}
