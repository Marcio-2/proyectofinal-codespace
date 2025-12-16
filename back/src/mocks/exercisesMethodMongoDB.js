const exercisesDB = require("./exercisesDB");

const find = (id) => {
  console.log(id);

  if (!id) {
    console.log(exercisesDB);
    return exercisesDB;
  } else {
    const exercise = exercisesDB.find(e => e.id == id);
    return exercise;
  }
};

const newExerciseModel = (id, name, muscle, level) => {
  exercisesDB.push({
    id,
    name,
    muscle,
    level,
  });
};

module.exports = { find, newExerciseModel}