const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const routineExerciseSchema = new Schema({
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
  },
  sets: { type: Number, default: 3 },
  reps: { type: Number, default: 10 },
  rest: { type: Number, default: 60 }, 
});


const routineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    exercises: [routineExerciseSchema], 
    difficulty: { type: String, enum: ["Easy","Medium","Hard"], default: "Medium" },
  },
  { timestamps: true }
);

const routine = mongoose.model("Routine", routineSchema, "Routine");

module.exports = routine;
