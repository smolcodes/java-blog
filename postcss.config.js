module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-clean'),
  ],
};