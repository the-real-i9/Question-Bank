/* eslint-disable import/no-extraneous-dependencies */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: colors.teal,
      },
    },
  },
  plugins: [],
};
