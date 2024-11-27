/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      colors: {
        darkBackground: "#111827",
        lightText: "#d1d5db",
        accentGreen: "#22c55e",
      },
      transitionProperty: {
        background: "background-color",
      },
      transitionDuration: {
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
