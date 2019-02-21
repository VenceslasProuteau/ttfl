module.exports = (isServedLocaly) => {
  const { isProd } = require('./env');
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const _ = require('lodash');

  const scss = require('./loaders/scss-loader')(isServedLocaly);
  const css = require('./loaders/css-loader')();

  return _.merge(
    scss,
    css,
    {
      optimizer: new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          core: isProd,
          reduceIdents: isProd,
        },
      }),
    },
  );
};
