/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#0B0C2A",
      primary: "#FFFFFF",
      secondary: "#B7B7B7",
      accent: "#070720",
      cool: "#E53637",
      gen: "#3C3D55",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    screens: {
      xsm: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
