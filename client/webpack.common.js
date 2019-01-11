const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const productionConfig = require("./webpack.prod.js");
const developmentConfig = require("./webpack.dev.js");

function caseEnv(env, config) {
  return env === "development" ? config[0] : config[1];
}

const commonConfig = env => ({
  entry: {
    front: "./src/front/main.js",
    back: "./src/back/main.js"
  },
  
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, //排除掉nod_modules,优化打包速度
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          caseEnv(env, ["style-loader", MiniCssExtractPlugin.loader]),
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["url-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader"
      }
    ]
  }
});

module.exports = env => {
  const config = env === "production" ? productionConfig : developmentConfig;
  return merge(commonConfig(env), config);
};
