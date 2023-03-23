/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{html,js,ts,tsx}",
    "./src/components/**/*.{html,js,ts,tsx}",
    "./src/pages/**/*.{html,js,ts,tsx}",
    "./src/pages/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
