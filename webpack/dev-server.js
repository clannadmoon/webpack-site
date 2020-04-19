const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.dev");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "192.168.124.5"
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8081, "192.168.124.5", () => {
  console.log("dev server listening on port 8081");
});
