var express = require('express');
var router = express.Router();
var verify = require('./verifyToken.js')

/* GET home page. */
router.get('/', verify, function (req, res, next) {
    //gives access to the user based on token info

    // you can find users for example
    User.findByOne({_id: req.user._id})

    res.send(req.user);
});

module.exports = router;
