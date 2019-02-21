const { src } = require('./build-config');

module.exports = (isServedLocaly) => {
  const path = require('path');
  const env = require('./env');
  const webpack = require('webpack');
  const HtmlWebPackPlugin = require("html-webpack-plugin");
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
  const scriptsLoader = require('./loaders/scripts-loader')();
  const stylesConfig = require('./webpack.styles')(isServedLocaly);
  const {
    dest,
  } = require('./build-config');
  return {
    mode: env.isProd ? 'production' : 'development',
    entry: {
      app: ['./src/index.js'],
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      watchContentBase: true,
      port: 9000,
    },
    optimization: {
      namedModules: true,
      namedChunks: true,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          styles: {
            test: /(\.css|\.scss)$/,
            name: dest.styleFileName,
            chunks: 'all',
            enforce: true,
            priority: 10,
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: chunk => ['vendors', 'app'].indexOf(chunk.name) >= 0,
          },
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: !env.isProd,
        }),
      ],
    },
    module: {
        rules: [
            scriptsLoader,
            stylesConfig.scssLoader,
            stylesConfig.cssLoader,
            stylesConfig.imagesLoader,
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        commons: `${src.appPath}/commons/`,
        sass: `${src.appPath}/sass/`,
        assets: `${src.appPath}/assets`,
      }
    },
    plugins: [
      stylesConfig.extractor,
      new HtmlWebPackPlugin({
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.SourceMapDevToolPlugin({
        test: [/\.js$/],
        columns: false,
        exclude: /vendors/,
        moduleFilenameTemplate: '[resource-path]',
        fallbackModuleFilenameTemplate: '[resource-path]',
      }),

    ]
  };
};
