var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // http://localhost:3000/users/
  res.json({
    name: "Alberto"
  });
});

module.exports = router;
