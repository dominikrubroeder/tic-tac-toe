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
      colors: {
        app: {
          "teal-100": "#65E9E4",
          "teal-300": "#31C3BD",
          "orange-100": "#FFC860",
          "orange-300": "#F2B137",
          "navy-700": "#1F3641",
          "navy-900": "#1A2A33",
          "gray-200": "#DBE8ED",
          "gray-400": "#A8BFC9",
        },
      },
      boxShadow: {
        bottomed: "inset 0px -8px 0px #10212A;",
      },
    },
  },
  plugins: [],
};
