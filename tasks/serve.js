const webpack = require('webpack');
const webpackConfig = require('./webpack.config')();
const WebpackDevServer = require('webpack-dev-server');
const gulp = require('gulp');

module.exports = () => {
  webpackConfig.entry.app.unshift(
    `webpack-dev-server/client?http://localhost:${webpackConfig.devServer.port}/`,
    "webpack/hot/dev-server"
  );
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true
  });
  server.listen(webpackConfig.devServer.port);
  gulp.watch('src/**/locales/[A-z]*.json', gulp.series('merge-locales'));
}