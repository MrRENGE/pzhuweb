const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_[hash].js",
    chunkFilename: "[name]_[hash].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[hash].css",
      chunkFilename: "[id]_[hash].css"
    }),
    new CleanWebpackPlugin(["build"], {
      root: path.resolve(__dirname, "./../static")
    })
  ]
};
