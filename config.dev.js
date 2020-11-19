const path = require("path");

module.exports = {
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
  optimization: {},
};
