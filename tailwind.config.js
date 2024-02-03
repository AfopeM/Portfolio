/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "light-dim": "rgba(230,230,230,50%)",
          light: "rgb(230, 230, 230)",
          dark: "rgb(34,40,52)",
          "dark-dim": "rgb(34,40,52,75%)",
          blue: "rgb(68,171,229)",
        },
      },
      fontFamily: {
        fira: ["var(--fira)"],
      },
    },
  },
  plugins: [],
};
