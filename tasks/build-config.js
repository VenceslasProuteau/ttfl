const path = require('path');

module.exports = {
  langs: ['fr', 'en'],
  src: {
    appPath: path.resolve(__dirname, '../src'),
    tasksPath: path.resolve(__dirname, '../tasks'),
    locales: './src/**/locales-',
    materialModule: path.resolve(__dirname, '../node_modules'),
  },
  dest: {
    distPath: path.resolve(__dirname, '../dist'),
    locales: 'dist/locales'
  }
}