var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
const {registerValidation} = require("../validation.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post('/', async function (req, res, next) {

    //validation
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send("Incorrect first or last name");
    }
    
    //check if user existss
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists){ 
        return res.status(400).send("Email already exists");
    } 

    //Hash the password
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

    //create new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    });

    try{
        // const savedUser = await user.save();
        user.save()
            .then( function(response) {
                 //load the user's page
                // const user = User.findOne({email: req.body.email});
                const token = jwt.sign({_id: response._id}, process.env.TOKEN_SECRET); 
                res.status(200).header('auth-token', token).json({token: token, email: req.body.email});
            })

    } catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
