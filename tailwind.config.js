/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: "true",
        screens: {
          lg: "1275px",
          xl: "1275px",
          "2xl": "1275px",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-green": "#00d632",
      },
    },
  },
  plugins: [],
};
