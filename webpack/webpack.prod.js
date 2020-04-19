const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const env = require("../config/prod.env");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": env
    }),
    new UglifyJSPlugin({
      sourceMap: false
    })
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
    // splitChunks: {
    //   cacheGroups: {
    //     // 注意: priority属性
    //     // 其次: 打包业务中公共代码
    //     common: {
    //       name: "common",
    //       chunks: "all",
    //       minSize: 1,
    //       priority: 0
    //     },
    //     // 首先: 打包node_modules中的文件
    //     vendor: {
    //       name: "vendor",
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: "all",
    //       priority: 10
    //     }
    //   }
    // }
  }
});
