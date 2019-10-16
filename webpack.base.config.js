const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  build: path.resolve(__dirname, "build"),
  src: path.resolve(__dirname, "src"),
  public: path.resolve(__dirname, "public")
};
module.exports = {
  entry: {
    app: `${PATHS.src}/index.js`
  },
  output: {
    path: PATHS.build,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`
    }),
    new MiniCssExtractPlugin({
      filename: `bundle.css`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: `${__dirname}/postcss.config.js` } }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: `${PATHS.public}/media/[name].[hash:8].[ext]`
        }
      }
    ]
  }
};
