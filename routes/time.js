var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gettime', function(req, res, next) {
  res.send(new Date().toString());
});

module.exports = router;
