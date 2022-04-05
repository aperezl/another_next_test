module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        nodegreen: {
          800: "#336633",
          600: "#339933",
          400: "#66cc33",
        },
        nodeblue: {
          800: "#03254c",
          500: "#1167b1",
          400: "#187bcd",
          300: "#2a9df4",
          100: "#d0efff",
        },
        nodeblack: "#333333",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
