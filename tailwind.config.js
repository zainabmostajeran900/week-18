/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        appGray : "#343a40"
      },
      screens : {
        xs : "480px"
      }
    },
  },
  plugins: [],
};
