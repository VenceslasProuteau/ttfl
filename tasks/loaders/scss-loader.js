module.exports = (isServedLocaly) => {
  const { isProd } = require('../env');
  const { src } = require('../build-config');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  const extractor = new MiniCssExtractPlugin({
    // no hash with css-hot-loader
    filename: `[name]${isServedLocaly ? '' : '-[contenthash]'}.css`,
  });

  const loaders = [
    // for now MiniCssExtractPlugin doesn't bind to HMR
    // so no assets (svg, png...) on HMR for manifest
    // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/34

    /* eslint-disable no-process-env */
    process.env.NODE_ENV === 'test' ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('autoprefixer')(),
        ],
        sourceMap: !isProd,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: !isProd,
        includePaths: [src.appPath, src.materialModule],
      },
    },
  ];

  const scssLoader = {
    test: /\.scss$/,
    include: [src.appPath],
    use: ['css-hot-loader'].concat(loaders),
  };

  return {
    scssLoader,
    extractor,
  };
};
