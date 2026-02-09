const exercisesDB = require("../mocks/exercisesDB");
const Exercise = require("../models/Exercise");

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    const exerciseRes = exercises.map((exercise) => {
      return {
        id: exercise.id,
        name: exercise.name,
        muscle: exercise.muscle,
        level: exercise.level,
        description: exercise.description,
        videoUrl: exercise.videoUrl,
        alternatives: exercise.alternatives || [],
      };
    });
    res.status(200).json({
      status: "succeeded",
      data: exerciseRes,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const getExerciseById = async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = await Exercise.findById(id);
    res.status(200).json({
      status: "succeeded",
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
    const newExercise = new Exercise(req.body);
    await newExercise.save();

    res.status(200).json({
      status: "succeeded",
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

    const updatedExercise = await Exercise.findByIdAndUpdate(
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
    await Exercise.findByIdAndDelete(id);
    res.status(200).json({
      status: "succeeded",
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

const loadData = async (req, res) => {
  try {
    const exerciseUpserts = exercisesDB.map(async (exercise) => {
      await Exercise.updateOne(
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
              imageUrl: alt.imageUrl,
            })),
          },
        },
        { upsert: true } // si no existe, crea uno nuevo
      );
    });

    await Promise.all(exerciseUpserts);

    console.log("✅ Exercises loaded successfully (upsert)!");
    res
      .status(200)
      .json({ status: "succeeded", data: exercisesDB, error: null });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
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
