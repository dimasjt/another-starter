const webpack = require("webpack")
const path = require("path")

const config = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("public"),
    filename: "[name].js",
  },
}

module.exports = config
