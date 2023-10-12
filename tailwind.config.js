/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#0B0C2A",
      primary: "#FFFFFF",
      secondary: "B7B7B7",
      accent: "070720",
      red: "E53637"
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}