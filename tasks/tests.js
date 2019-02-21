module.exports = done => {
  const path = require('path');
  const Server = require('karma').Server;
  new Server({
    configFile: path.resolve('karma.conf.js')
  }, done).start();
}
