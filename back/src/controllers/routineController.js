const Routine = require("../models/Routine");

const getRoutines = async (req, res) => {
  try {
    const userId = req.user.id;
    const routines = await Routine.find({ user: userId }).sort({ createdAt: -1 });

    const routinesRes = routines.map((routine) => ({
      id: routine._id,
      name: routine.name,
      exercises: routine.exercises,
      difficulty: routine.difficulty,
      createdAt: routine.createdAt,
      updatedAt: routine.updatedAt,
    }));

    res.status(200).json({ status: "succeeded", data: routinesRes, error: null });
  } catch (error) {
    res.status(500).json({ status: "failed", data: null, error: error.message });
  }
};

const getRoutineById = async (req, res) => {
  try {
    const id = req.params.id;
    const routineDoc = await Routine.findById(id);

    if (!routineDoc) return res.status(404).json({ status: "failed", data: null, error: "Routine not found" });

    if (routineDoc.user.toString() !== req.user?.id)
      return res.status(403).json({ status: "failed", data: null, error: "Access denied" });

    res.status(200).json({ status: "succeeded", data: routineDoc, error: null });
  } catch (error) {
    res.status(500).json({ status: "failed", data: null, error: error.message });
  }
};

const createRoutine = async (req, res) => {
  try {
    const { name, exercises, difficulty } = req.body;
    const userId = req.user.id;

    if (!name || !exercises || exercises.length === 0)
      return res.status(400).json({ status: "failed", data: null, error: "Incomplete data" });

    const newRoutine = new Routine({ name, exercises, difficulty, user: userId });
    await newRoutine.save();

    res.status(201).json({ status: "succeeded", data: newRoutine, error: null });
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({ status: "failed", data: null, error: "Routine name already exists for this user" });

    res.status(500).json({ status: "failed", data: null, error: error.message });
  }
};

const updateRoutine = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, exercises, difficulty } = req.body;

    const routineDoc = await Routine.findById(id);

    if (!routineDoc)
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "Routine does not exist",
      });

    if (routineDoc.user.toString() !== req.user.id)
      return res.status(403).json({
        status: "failed",
        data: null,
        error: "Access denied",
      });

    routineDoc.name = name;
    routineDoc.exercises = exercises;
    routineDoc.difficulty = difficulty;

    await routineDoc.save();

    res.status(200).json({
      status: "succeeded",
      data: routineDoc,
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

const deleteRoutine = async (req, res) => {
  try {
    const id = req.params.id;
    const routineDoc = await Routine.findById(id);
    if (!routineDoc) return res.status(404).json({ status: "failed", data: null, error: "Routine does not exist" });
    if (routineDoc.user.toString() !== req.user.id)
      return res.status(403).json({ status: "failed", data: null, error: "Access denied" });

    await Routine.findByIdAndDelete(id);

    res.status(200).json({ status: "succeeded", data: null, error: null });
  } catch (error) {
    res.status(500).json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { getRoutines, getRoutineById, createRoutine, updateRoutine, deleteRoutine };
