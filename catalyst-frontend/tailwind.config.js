/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {primary:"#ffed00"},
    extend: {
      textColor: {
        white: '#ffffff',
      },backgroundColor: {
        black: '#000000',
      },
    },
  },
  plugins: [],
};
