var express = require('express');
var router = express.Router();
var verify = require('./verifyToken.js')
var User = require("../models/User.js");
const jwt = require("jsonwebtoken");

/* GET home page. */
router.put('/', verify, async function (req, res, next) {
    res.send('Got a PUT request')
    const user = await User.findOne({email: req.body.email});
});

module.exports = router;
