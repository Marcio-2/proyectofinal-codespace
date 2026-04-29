const { getExercises,getExerciseById,createExercise,updateExercise,deleteExercise, loadData } = require('../controllers/exerciseController')
const verifyToken = require('../middleware/verifyToken');

const exercisesRouter = require('express').Router()

exercisesRouter.get('/', getExercises)
exercisesRouter.post('/',verifyToken, createExercise)
exercisesRouter.post('/loadData', loadData)
exercisesRouter.get('/:id', getExerciseById)
exercisesRouter.put('/:id',verifyToken, updateExercise)
exercisesRouter.delete('/:id',verifyToken, deleteExercise)

module.exports = exercisesRouter;



// exercisesRouter.get('/loadData', loadData)