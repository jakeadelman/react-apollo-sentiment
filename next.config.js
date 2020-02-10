const withCss = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const compose = require("next-compose");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

// module.exports = withCSS(withTypescript());

// module.exports = withCss();
module.exports = compose([
  [withCss],
  [withTypescript],
  [withSass],
  [withImages]
]);
