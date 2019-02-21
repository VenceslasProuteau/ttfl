module.exports = (isServedLocaly) => {
  const { isProd } = require('./env');
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const _ = require('lodash');

  const scss = require('./loaders/scss-loader')(isServedLocaly);
  const css = require('./loaders/css-loader')();
  const assets = require('./loaders/assets-loader')();

  return _.merge(
    scss,
    css,
    assets,
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
