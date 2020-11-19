const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    myfile: "./src/index.js",
  },
  output: {
    /* path: path.resolve(__dirname, "build"), */
    filename: "js/[name].js",
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              additionalData: `@env: ${process.env.NODE_ENV};`,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "./"),
    writeToDisk: false,
    hot: true,
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  optimization: {},
};
