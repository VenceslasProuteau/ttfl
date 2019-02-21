module.exports = config => {
  const path = require('path');
  const webpackConfig = require('./tasks/webpack.config');
  const {options} = require('./tasks/env');
  const TEST_ROOT_FILE = path.resolve('tasks', 'loaders', 'tests-bundle.js');

  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-chai-sinon',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],
    files: [TEST_ROOT_FILE],
    preprocessors: {
      [TEST_ROOT_FILE]: ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      devtool: 'inline-source-map'
    },
    webpackMiddleware: {
      stats: {
        assets: false,
        children: false,
        modules: false,
        warnings: false
      }
    },
    singleRun: !options.watch,
    autoWatch: options.watch,
    browsers: ['Chrome']
  });
}