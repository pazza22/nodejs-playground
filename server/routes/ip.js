var express = require('express');
var router = express.Router();

router.get('/whatismyip', function (req, res, next) {
  res.send(req.socket.remoteAddress);
});

module.exports = router;
