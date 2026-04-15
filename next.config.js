const path = require("path");

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};
