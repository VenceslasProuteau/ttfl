const minimist = require('minimist');
const options = minimist(process.argv.slice(2));
let [main] = options.env ? options.env.split(':') : 'dev';

module.exports = {
  isProd: main === 'prod' || main === 'recette',
  isDev: main !== 'prod' && main !== 'recette',
  options
};
