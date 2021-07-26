var express = require('express');
var router = express.Router();
const path = require("path");
const { fetchUnsplash } = require("../fetchImg.js");

/* GET home page. */
router.get('/', function(req, res, next) {

  // fetchUnsplash();
  res.send({text: "hello axios"});
  
});

module.exports = router;
