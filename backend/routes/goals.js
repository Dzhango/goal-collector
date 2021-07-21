var express = require('express');
var router = express.Router();
var verify = require('./verifyToken.js')
var User = require("../models/User.js");
const jwt = require("jsonwebtoken");

/* GET home page. */
router.put('/', verify, async function (req, res, next) {
    const goal = {
        Title: req.body.Title,
        Desc: req.body.Desc,
        Attainable: req.body.Attainable,
        Measure: req.body.Measure,
        Deadline: req.body.Deadline,
        Img: req.body.Img
    }
    const user = await User.findOne({email: req.get("email")});
    
    user.goals.push(goal);
    await user.save();

    res.send(user.goals);
});

module.exports = router;
