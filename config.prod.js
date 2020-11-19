const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    myfile: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
    /* publicPath: "/assets/", */
    chunkFilename: "[name].bundle.js",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {},
};
