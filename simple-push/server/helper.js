/**
 * A bunch of helper methods that we don't want to clutter push-server.js
 */
module.exports = {
  DB: function DB(filename) {
    var fs = require("fs");
  
    this.push = function(obj, cb) {
      fs.appendFile(filename, JSON.stringify(obj) + '\n', cb);
    };
  
    this.getAll = function(cb) {
      fs.readFile(filename, 'utf8', function(err, body) {
        if (err) return cb(err);
  
        cb(null, body.split('\n').map(function(l) {
          return l && JSON.parse(l);
        }).filter(function(o) {
          return !!o;
        }));
      });
    };
  },
  allowCors: function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  }
};
