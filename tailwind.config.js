/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#0EE37D",
      },
    },
  },
  plugins: [],
};
