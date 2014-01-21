{
var Path = require("path");
var helper = require("./helper");
var DB = helper.DB;
var express = require("express");
var request = require("request");

var db = new DB(Path.join(__dirname, '/db.json'));
var version = 0;

var app = express();

app.use(express.bodyParser());
app.use(helper.allowCors);
}

app.post('/register', function(req, res) {
  console.log('register called', req.body.url);

  db.push(req.body.url);

  res.send('OK!');
});

app.post('/trigger', function(req, res, next) {
  version += 1;

  db.getAll(function(err, urls) {
    if (err) return next(err);

    urls.forEach(function(url) {
      // 'url' contains the endpoint on the push server
    });
  });
});

{
app.listen(process.env.PORT || 3000);
}
