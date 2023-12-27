/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero-pattern": "url('./../assets/HomeBanner.svg')",
        "team-hero-pattern": "url('./../assets/TeamBanner.svg')",
        "contact-hero-pattern": "url('./../assets/ContactBanner.svg')",
      },
    },
    screens: {
      desktop: "1400px",
      xxs: "500px",
      mmd: "820px",
      ...defaultTheme.screens,
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
