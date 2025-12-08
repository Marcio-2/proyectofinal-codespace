const exercisesDB = require("../mocks/exercisesDB");
const { find } = require("../mocks/exercisesMethodMongoDB");
const exercise = require("../models/Exercise");
const exerciseModel = require("../models/Exercise");

//GET ALL EXERCISES
const getExercises = async (req, res) => {
  try {
    const allExercises = await exerciseModel.find();
    const resExercise =allExercises.map(exercise =>{
        return {
            id: exercise.id,
            name: exercise.name
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
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const updateExercise = async (req, res) => {
  try {
    const id = req.params.id
    const {name, muscle, level} = req.body

    const exerciseAux = await exerciseModel.findById(id);
   
    if(!exerciseAux) res.status(404).send('The exercise doesn´t exist')

    if(name) {
        exerciseAux.name = name
    }    
    if(muscle) {
        exerciseAux.muscle = muscle
    }
    if(level) {
        exerciseAux.level = level
    }

    await exerciseAux.save()

    res.status(200).json({
      status: "succeded",
      data: null,
      error: null,
    });
  } catch (error) {
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
  deleteExercise,
  updateExercise,
  loadData,
};
