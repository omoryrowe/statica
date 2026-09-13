/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          raised: "#141821",
          line: "#2A3140",
        },
        paper: "#F5F5F2",
        mist: "#B8BDC9",
        bolt: "#F0C014",
        boltdeep: "#C99A05",
      },
      boxShadow: {
        lift: "0 24px 70px -30px rgba(0,0,0,0.85)",
        glow: "0 18px 44px -22px rgba(240,192,20,0.65)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nacelle: ["var(--font-nacelle)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        drift: "drift 28s ease-in-out infinite alternate",
        "drift-slow": "drift-slow 36s ease-in-out infinite alternate",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(-3%, -2%, 0) scale(1)" },
          "100%": { transform: "translate3d(4%, 3%, 0) scale(1.12)" },
        },
        "drift-slow": {
          "0%": { transform: "translate3d(3%, 2%, 0) scale(1.08)" },
          "100%": { transform: "translate3d(-4%, -3%, 0) scale(1)" },
        },
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
