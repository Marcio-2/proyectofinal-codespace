const { getExercises,getExerciseById,createExercise,updateExercise,deleteExercise, loadData } = require('../controllers/exerciseController')

const exercisesRouter = require('express').Router()

exercisesRouter.get('/', getExercises)
exercisesRouter.post('/', createExercise)
// exercisesRouter.get('/loadData', loadData)
exercisesRouter.get('/:id', getExerciseById)
exercisesRouter.put('/:id', updateExercise)
exercisesRouter.delete('/:id', deleteExercise)

module.exports = exercisesRouter;

