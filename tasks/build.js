const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = cb => {
  return webpack(webpackConfig, err => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    cb();
  });
}