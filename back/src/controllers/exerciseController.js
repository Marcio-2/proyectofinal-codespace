const exercisesDB = require("../mocks/exercisesDB");
const exerciseModel = require("../models/Exercise");

//GET ALL EXERCISES
const getExercises = async (req, res) => {
  try {
    const allExercises = await exerciseModel.find();
    const resExercise = allExercises.map((exercise) => {
      return {
        id: exercise.id,
        name: exercise.name,
        muscle: exercise.muscle,
        level: exercise.level,
      };
    });
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
    const newExercise = new exerciseModel(req.body);
    await newExercise.save();

    res.status(200).json({
      status: "succeded",
      data: newExercise,
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

const updateExercise = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedExercise = await exerciseModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedExercise) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "The exercise doesnt exist",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: updatedExercise,
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
    const upsertPromises = exercisesDB.map(async (exercise) => {
      await exerciseModel.updateOne(
        { name: exercise.name }, 
        {
          $set: {
            muscle: exercise.muscle,
            level: exercise.level,
            description: exercise.description || "",
            imageUrl: exercise.imageUrl || "",
            videoUrl: exercise.videoUrl || "",
            alternatives: (exercise.alternatives || []).map((alt) => ({
              name: alt.name,
              imageUrl: alt.imageUrl
            }))
          }
        },
        { upsert: true } // si no existe, crea uno nuevo
      );
    });

    await Promise.all(upsertPromises);

    console.log("✅ Exercises loaded successfully (upsert)!");
    res.status(200).json({ status: "succeeded", data: exercisesDB, error: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", data: null, error: error.message });
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
