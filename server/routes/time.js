var express = require('express');
var date_time = require('./../bl/date-time');
var router = express.Router();

/* GET home page. */
router.get('/gettime', function (req, res, next) {
  let date = new date_time();
  let formattedDate = '';
  console.log(req.query);
  console.log(req.query.format);
  if (req.query.format == 'short') {
    formattedDate = date.short_date();
  } else {
    formattedDate = date.full_date();
  }
  res.send(formattedDate);
});

module.exports = router;
