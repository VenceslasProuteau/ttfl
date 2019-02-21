module.exports = () => {
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const { options } = require('../env');

  const loaders = [
    /* eslint-disable no-process-env */
    process.env.NODE_ENV === 'test' ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: !options.isProd,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('autoprefixer')(),
        ],
        sourceMap: !options.isProd,
      },
    },
  ];

  const cssLoader = {
    test: /\.css$/,
    use: loaders,
  };

  return {
    cssLoader,
  };
};
