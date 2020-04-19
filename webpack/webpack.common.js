const path = require("path");
const webpack = require("webpack");
const glob = require("glob");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const root = path.resolve(__dirname, "../");

function entries() {
  // let jsDir = './src/js/lib'
  let jsDir = path.resolve(__dirname, "../src/page");
  let entryFiles = glob.sync(jsDir + "/**/*.js");
  let map = {};

  for (let i = 0; i < entryFiles.length; i++) {
    let filePath = entryFiles[i];
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    map[filename] = filePath;
  }
  return map;
}
function newHtmlWebpackPlugins() {
  let jsDir = path.resolve(__dirname, "../src/page");
  let htmls = glob.sync(jsDir + "/**/*.html");
  let plugins = [];

  for (let i = 0; i < htmls.length; i++) {
    let filePath = htmls[i];
    let filename_no_extension = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    let filename = filename_no_extension.concat(".html");
    plugins.push(
      new HtmlWebpackPlugin({
        filename: filename,
        template: filePath,
        chunks: [filename_no_extension],
        minify: {
          collapseWhitespace: true //删除空格、换行
        }
      })
    );
  }

  return plugins;
}

module.exports = {
  entry: entries(),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js",
    chunkFilename: "[name].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        include: path.resolve(__dirname, "../src")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //use: "css-loader,postcss-loader"
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //use: "css-loader!less-loader"
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require("autoprefixer")({
                    overrideBrowserslist: ["last 2 version"] //兼容信息设置
                  })
                ]
              }
            },

            "less-loader"
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        // use: ["url-loader?limit=8192&name=images/[name].[hash:8].[ext]"]
        use: [
          {
            loader: "url-loader",
            // loader: 'file-loader',
            options: {
              esModule: false, // 这里设置为false
              name: "images/[name].[hash:8].[ext]",
              limit: 10240
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              //bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: root
    }),
    new ExtractTextPlugin("[name].[hash:8].css"),
    ...newHtmlWebpackPlugins()
  ]
};
