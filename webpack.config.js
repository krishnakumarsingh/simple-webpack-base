/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    myfile: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
    publicPath: "/assets/",
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "./"),
    writeToDisk: false,
    hot: true,
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
};
