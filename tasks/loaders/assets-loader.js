module.exports = () => {
  const { isProd } = require('../env');
  const { dest, src } = require('../build-config');

  const fileLoader = 'file-loader?name=';

  const imagesLoader = {
    test: src.imagesTypes,
    include: src.images,
    loaders: [
      `${fileLoader + dest.images}/[name]${isProd ? '-[hash]' : ''}.[ext]`,
    ],
  };

  return {
    imagesLoader,
  };
};
