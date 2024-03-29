const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config.js");
const webpack = require("webpack");
const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  devServer: {
    // historyApiFallback: true,
    // noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3000
  }
});

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
