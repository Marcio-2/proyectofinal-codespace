const mongoose = require('mongoose');
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    muscle: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
});

const exercise = mongoose.model("Exercise", exerciseSchema, "Exercise");

module.exports = exercise
