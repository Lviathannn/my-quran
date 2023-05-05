/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {},
      fontFamily: {
         arab: ["LPMQI", "serif"],
         poppins: ["Poppins", "serif"],
      },
   },
   plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
