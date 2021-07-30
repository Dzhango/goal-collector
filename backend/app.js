var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signUp');
var loginRouter = require('./routes/login');
var goalRouter = require("./routes/goals")
const dotenv = require("dotenv");
var cors = require('cors')
const userpageRouter = require("./routes/userpage");

var path = require('path');

dotenv.config();
var app = express();

//DB setup
const uri = process.env.DB_CONNECT;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("connected to DB");
});

app.use(express.static(path.resolve(__dirname, "../frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

//Middleware
app.use(express.json());
app.use(cors());
//Routes Middleware
app.use('/home', indexRouter);
// app.use("/", express.static('build'));
app.use('/signup', signupRouter);
app.use('/signin', loginRouter);
app.use('/goals', goalRouter);
app.use('/userpage', userpageRouter);
app.use('/view', goalRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// // error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

module.exports = app;
