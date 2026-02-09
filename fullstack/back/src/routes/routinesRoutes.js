const {
  getRoutines,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
} = require('../controllers/routineController');
const verifyToken = require('../middleware/verifyToken');

const routinesRouter = require('express').Router();

routinesRouter.get('/', verifyToken, getRoutines);

routinesRouter.post('/', verifyToken, createRoutine);
routinesRouter.get('/:id', verifyToken, getRoutineById);
routinesRouter.put('/:id', verifyToken, updateRoutine);
routinesRouter.delete('/:id', verifyToken, deleteRoutine);

module.exports = routinesRouter;
