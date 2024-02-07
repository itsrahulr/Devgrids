/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#171717",
      white: "#ededed",
      grey: "#A0A0A2",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      gsans: ["General Sans", "sans-serif"],
    },
    fontSize: {
      heroh1: "clamp(2rem, 0.8984rem + 4.6875vw, 5rem)",
      xl: " clamp(1rem, 0.8164rem + 0.7813vw, 1.5rem);",
      Serviceh1: " clamp(1.5rem, 1.2246rem + 1.1719vw, 2.25rem)",
      Servicep: "  clamp(1rem, 0.9082rem + 0.3906vw, 1.25rem);",
    },
    extend: {},
  },
  plugins: [],
};
