var express = require('express');
var router = express.Router();
const parser = require('ua-parser-js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // using user agent parser to parse out the details of the user-agent property
  var operatingSystem = parser(req.headers['user-agent']).os.name
  // parsing the language of the user
  var language = req.headers['accept-language'].split(',')[0]
  res.send({
    ipaddress: ip,
    language: language,
    software: operatingSystem
  })
});

module.exports = router;
