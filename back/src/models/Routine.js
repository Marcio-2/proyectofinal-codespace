const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Sub-schema para ejercicios dentro de la rutina
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
  // Podrías añadir aquí otros campos si quieres, ejemplo:
  sets: { type: Number, default: 3 },
  reps: { type: Number, default: 10 },
  rest: { type: Number, default: 60 }, // segundos de descanso
});

// Schema principal de la rutina
const routineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    exercises: [routineExerciseSchema], // array de ejercicios
    difficulty: { type: String, enum: ["easy","medium","hard"], default: "medium" },
  },
  { timestamps: true }
);

const routine = mongoose.model("Routine", routineSchema, "Routine");

module.exports = routine;
