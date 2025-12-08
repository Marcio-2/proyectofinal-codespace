const { getExercises,getExerciseById,createExercise,updateExercise,deleteExercise, loadData } = require('../controllers/exerciseController')

const exercisesRouter = require('express').Router()

exercisesRouter.get('/', getExercises)
// exercisesRouter.get('/loadData', loadData)
exercisesRouter.get('/:id', getExerciseById)
exercisesRouter.post('/', createExercise)
exercisesRouter.put('/:id', updateExercise)
exercisesRouter.delete('/:id', deleteExercise)

module.exports = exercisesRouter;

