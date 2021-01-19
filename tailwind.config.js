module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: {
    content: [
    './**/*.js',
    './**/*.11ty.js',
    './**/*.html',
    './**/*.njk',
    ],
    },
};