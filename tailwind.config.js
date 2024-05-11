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
        "primary_color": "#918983",
        "primary_bg_color": "#f2f3f4",
        "primary_btn_color": "#562932",
      }
    },
  },
  plugins: [flowbite.plugin()],
}

