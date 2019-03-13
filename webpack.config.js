const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/client/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/client/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            {
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loaders: ["file-loader?name=./images/[folder]/[name].[ext]"]
      },
      {
        test: /\.(svg)$/,
        loaders: ["file-loader?name=./[folder]/[name].[ext]"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/client/template/index.html")
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "/client/template/favicon.ico") },
      { from: path.join(__dirname, "/client/template/manifest.json") }
    ])
  ],
  devServer: {
    proxy: { "/api/**": { target: "http://localhost:5000", secure: false } }
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
