const {
  getRoutines,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
} = require('../controllers/routineController');

const routinesRouter = require('express').Router();

routinesRouter.get('/', getRoutines);
routinesRouter.post('/', createRoutine);
routinesRouter.get('/:id', getRoutineById);
routinesRouter.put('/:id', updateRoutine);
routinesRouter.delete('/:id', deleteRoutine);

module.exports = routinesRouter;
