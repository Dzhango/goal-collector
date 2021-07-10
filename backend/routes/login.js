var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
const { loginValidation } = require("../validation.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res, next) => {
    //validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //check if user exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Email or password is wrong");
    
    //password check
    const validPass = await bcrypt.compareSync(req.body.password, user.password);
    if (!validPass) return res.status(400).send("invalid password");

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    
    res.header('auth-token', token).send(token);

})

module.exports = router;