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
      }
    },
  },
  plugins: [flowbite.plugin()],
}

