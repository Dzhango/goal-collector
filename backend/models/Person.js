import mongoose from 'mongoose';

const { Schema } = mongoose;

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    password: Number,
    comments: [{ body: String, date: Date }],
});

const Person = mongoose.model('Person', personSchema);