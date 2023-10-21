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
          "light-60": "rgba(229,229,229,60%)",
          light: "rgb(229,229,229)",
          dark: "rgb(34,40,52)",
          "dark-50": "rgb(34,40,52,50%)",
          "dark-80": "rgb(34,40,52,80%)",
          blue: "rgb(68,171,229)",
          background: "rgb(27,28,32)",
        },
      },
      fontFamily: {
        shrik: ["var(--shrik)"],
        oswald: ["var(--oswald)"],
      },
    },
  },
  plugins: [],
};
