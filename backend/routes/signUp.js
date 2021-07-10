var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
const {registerValidation} = require("../validation.js");
const bcrypt = require("bcryptjs");

router.post('/', async function (req, res, next) {

    //validation
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //check if user exists
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send("Email already exists"); 

    //Hash the password
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

    //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
