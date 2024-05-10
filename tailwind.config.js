const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "mulish": "'Mulish', sans-serif"
      },
      colors: {
        "primary_text_color": "#000000",
        "primary_color": "#d2b9a7",
        "primary_btn_color": "#e7d3c3",
      }
    },
  },
  plugins: [flowbite.plugin()],
}

