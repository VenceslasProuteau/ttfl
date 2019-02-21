module.exports = () => {
  const {src} = require('../build-config');

  let rule = {
    test: /\.(js|jsx)$/,
    use: ['babel-loader'],
    include: [src.appPath, src.tasksPath]
  };

  return rule;
}