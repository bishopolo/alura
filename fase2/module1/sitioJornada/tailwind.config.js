/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*"],
  theme: {
    extend: {
      fontFamily: {
        montserrat400: ["montserrat400", "sans-serif"],
        montserrat500: ["montserrat500", "sans-serif"],
        montserrat700: ["montserrat700", "sans-serif"],
      },
      maxWidth: {
        1200: "1200px",
      },
      colors: {
        activeRoute: "#8F0101",
        hoverButton: "#8F0101",
        button: "#B81515",
        category: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
