const del = require('del');
const {dest} = require('./build-config'); 

module.exports = cb => del(dest.distPath, cb);