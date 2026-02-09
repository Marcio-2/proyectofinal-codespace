const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const routineExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscle: { type: String, required: true },
  level: { type: String, required: true },
  sets: { type: Number, default: 3 },
  reps: { type: Number, default: 10 },
  rest: { type: Number, default: 60 },
});

// Generador id
routineExerciseSchema.virtual("id").get(function () {
  return this._id.toString();
});
routineExerciseSchema.set("toJSON", { virtuals: true });

const routineSchema = new Schema(
  {
    name: { type: String, required: true },
    exercises: [routineExerciseSchema],
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Medium" },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

routineSchema.set("toJSON", { virtuals: true });

const Routine = mongoose.model("Routine", routineSchema, "Routine");

module.exports = Routine;
