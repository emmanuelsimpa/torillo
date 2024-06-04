/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "69.06rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2898A4",
        },
      },
      fontFamily: {
        bs: ["black-sans", "sans-serif"],
        "bs-condensed-book": ["Black Sans Condensed Book", "sans-serif"],
        "bs-thin": ["Black Sans Thin", "sans-serif"],
        "bs-ultra-light": ["Black Sans Ultra Light", "sans-serif"],
        "bs-light": ["Black Sans Light", "sans-serif"],
        "bs-condensed-light": ["Black Sans Condensed Light", "sans-serif"],
        "bs-condensed-medium": ["Black Sans Condensed Medium", "sans-serif"],
        "bs-semi-bold": ["Black Sans SemiBold", "sans-serif"],
        "bs-bold": ["Black Sans Bold", "sans-serif"],
        "bs-condensed-bold": ["Black Sans Condensed Bold", "sans-serif"],
        "bs-black": ["Black Sans Black", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "22px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "34px",
        "5xl": "38px",
        "6xl": "50px",
        "7xl": "70px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
