const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    goals: [
        { Title: String, 
          Desc: String, 
          Measure: String,
          Attainable: String, 
          Values: String,
          Deadline: String, 
          Img: String
        }
    ]
});

module.exports = mongoose.model("User", userSchema);