var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var users=[];

  users.push({name:'sunqi',age:'23'});
  users.push({name:'nancy',age:"24"});
  res.render('index', { title: 'Express', user:users});
});

module.exports = router;
