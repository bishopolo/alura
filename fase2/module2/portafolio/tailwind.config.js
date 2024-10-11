/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232425",
        second: "#bada55",
      },
      maxWidth: {
        maxWidth: "1200px",
      },
      fontFamily: {
        boldRaleway: ["boldRaleway", "sans-serif"],
        mediumRaleway: ["mediumRaleway", "sans-serif"],
        regularRaleway: ["regularRaleway", "sans-serif"],
        semiBoldRaleway: ["semiboldRaleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
