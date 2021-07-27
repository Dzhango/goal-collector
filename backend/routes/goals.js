var express = require('express');
var router = express.Router();
var verify = require('./verifyToken.js')
var User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const { fetchUnsplash } = require("../fetchImg.js");

/* GET home page. */
router.put('/', verify, async function (req, res, next) {

    const user = await User.findOne({ email: req.get("email") });
    // const array = await user.goals

    const img = await fetchUnsplash(req.body.Title);

    const goal = {
        Title: req.body.Title,
        Desc: req.body.Desc,
        Attainable: req.body.Attainable,
        Measure: req.body.Measure,
        Values: req.body.Values,
        Deadline: req.body.Deadline,
        Img: img
    }


    user.goals.push(goal);
    await user.save();

    res.send(user.goals);
});

router.post('/goal', async function (req, res, next) {

    const user = await User.findOne({ email: req.get("email") });
    console.log(user);
    const array = user.goals;
    const goal = array.find((goal) => {
        if (goal.Title === req.body.Title) {
            return goal;
        }
    })


    res.send(goal);
});

router.post('/goal/delete', async function (req, res, next) {

    const user = await User.findOne({ email: req.get("email") });

    for (let i = 0; i < user.goals.length; i++) {
        if (user.goals[i].Title === req.body.Title) {
            user.goals.splice(i, 1);
            await user.save();
            res.send(user.goals[i]);
        }

    }

    res.status(400);
});

router.post('/goal/edit', async function (req, res, next) {

    const user = await User.findOne({ email: req.get("email") });

    for (let i = 0; i < user.goals.length; i++) {
        if (user.goals[i].Title === req.body.Title) {
            user.goals[i] = {
                Title: req.body.Title,
                Desc: req.body.Desc,
                Attainable: req.body.Attainable,
                Measure: req.body.Measure,
                Values: req.body.Value,
                Deadline: req.body.Deadline, 
                Img: req.body.Img
            }
            await user.save();
            res.send(user.goals[i]);
        }

    }

    res.sendStatus(400);
});

module.exports = router;
