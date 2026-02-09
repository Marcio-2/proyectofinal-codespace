const exercisesDB = require("./exercisesDB");

const find = (id) => {
  if (!id) {
    return exercisesDB;
  } else {
    return exercisesDB.find((e) => e.id == id);
  }
};

const newExerciseModel = ({
  id,
  name,
  muscle,
  level,
  description = "",
  imageUrl = "",
  videoUrl = "",
  alternatives = [],
}) => {
  exercisesDB.push({
    id,
    name,
    muscle,
    level,
    description,
    imageUrl,
    videoUrl,
    alternatives,
  });
};

module.exports = { find, newExerciseModel };
