const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    myfile: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
    publicPath: "/assets/",
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {},
};
