var express = require('express');
var router = express.Router();

var beto = {
  id: 0,
  name: "Carlos Alberto",
  last_name: "Gomez Ormachea"
};

var dorian = {
  id: 1,
  name: "Dorian Omar",
  last_name: "Vargas Colque"
};

var allusers = [beto, dorian];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(allusers);
});

router.get('/:id', function(req, res, next) {
  var selectedUser = allusers.find(function(user) {
    return user.id === parseInt(req.params.id)
  });
  res.json(selectedUser);
});

router.post('/', function(req, res, next) {
  var newUser = req.body;
  newUser.id = allusers.length + 1;

  allusers.push(newUser);

  res.json(newUser);
});

module.exports = router;
