const exercisesDB = require("../mocks/exercisesDB");
const exerciseModel = require("../models/Exercise");

//GET ALL EXERCISES
const getExercises = async (req, res) => {
  try {
    const allExercises = await exerciseModel.find();
    const resExercise = allExercises.map((exercise) =>{
        return {
            id: exercise.id,
            name: exercise.name,
            muscle: exercise.muscle,
            level: exercise.level,
        }
    })
    res.status(200).json({
      status: "succeded",
      data: resExercise,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//GET EXERCISE BY ID
const getExerciseById = async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = await exerciseModel.findById(id);
    console.log(exercise);
    res.status(200).json({
      status: "succeded",
      data: exercise,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const createExercise = async (req, res) => {
  try {
    const exerciseData = req.body;
    const newExercise = await exerciseModel({
      name: exerciseData.name,
      muscle: exerciseData.muscle,
      level: exerciseData.level,
    });
    await newExercise.save();
    console.log(newExercise);
    res.status(200).json({
      status: "succeded",
      data: newExercise,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const updateExercise = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, muscle, level } = req.body;
    const updatedExercise = await exerciseModel.findByIdAndUpdate(
      id,
      { name, muscle, level },
      { new: true } 
    );

    if (!updatedExercise) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "El ejercicio no existe",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: {
        id: updatedExercise.id,
        name: updatedExercise.name,
        muscle: updatedExercise.muscle,
        level: updatedExercise.level,
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const id = req.params.id;
    await exerciseModel.findByIdAndDelete(id);
    res.status(200).json({
      status: "succeded",
      data: null,
      error: null,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};



//Load initial data
const loadData = async (req, res) => {
  try {
    exercisesDB.map(async (exercise) => {
      const newExercise = exerciseModel({
        name: exercise.name,
        muscle: exercise.muscle,
        level: exercise.level,
      });
      await newExercise.save();
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
  loadData,
};
