var express = require('express');
var router = express.Router();
const path = require("path");
var User = require("../models/User.js");

/* GET home page. */
router.post('/', async function(req, res, next) {
  const user = await User.findOne({email: req.body.email});

  if (user === null){
    // send random goals
  }

  res.status(200).send(user.goals);
});

module.exports = router;
