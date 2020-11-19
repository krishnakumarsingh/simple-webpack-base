const path = require("path");

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "./"),
    writeToDisk: false,
    hot: true,
  },
  optimization: {},
};
