const routineModel = require("../models/Routine");

// GET ALL ROUTINES
const getRoutines = async (req, res) => {
  try {
    const allRoutines = await routineModel.find().sort({ createdAt: -1 });

    const routinesRes = allRoutines.map((routine) => ({
      id: routine._id,
      name: routine.name,
      exercises: routine.exercises,
      difficulty: routine.difficulty,
      createdAt: routine.createdAt,
      updatedAt: routine.updatedAt,
    }));

    res.status(200).json({
      status: "succeeded",
      data: routinesRes,
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

// GET ROUTINE BY ID
const getRoutineById = async (req, res) => {
  try {
    const id = req.params.id;
    const routine = await routineModel.findById(id);

    if (!routine) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "Routine not found",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: routine,
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

// CREATE ROUTINE
const createRoutine = async (req, res) => {
  try {
      console.log("difficulty recibido:", req.body.difficulty);
    const { name, exercises,  difficulty } = req.body;

    if (!name || !exercises || exercises.length === 0) {
      return res.status(400).json({
        status: "failed",
        data: null,
        error: "Incomplete data: name and exercises are required",
      });
    }

    const newRoutine = new routineModel({
      name,
      exercises,
      difficulty,
    });

    await newRoutine.save();

    res.status(200).json({
      status: "succeeded",
      data: newRoutine,
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

// UPDATE ROUTINE
const updateRoutine = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedRoutine = await routineModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedRoutine) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "Routine does not exist",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: updatedRoutine,
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

// DELETE ROUTINE
const deleteRoutine = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedRoutine = await routineModel.findByIdAndDelete(id);

    if (!deletedRoutine) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "Routine does not exist",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: null,
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

module.exports = {
  getRoutines,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
};
