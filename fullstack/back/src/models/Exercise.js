const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alternativeSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  videoUrl: String,
});

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  muscle: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  videoUrl: {
    type: String,
    default: "",
  },
  alternatives: [alternativeSchema],
});

const exercise = mongoose.model("Exercise", exerciseSchema, "Exercise");

module.exports = exercise;
