const { getExercises } = require('../controllers/exerciseController')

const exercisesRouter = require('express').Router()

exercisesRouter.get('/', getExercises)

module.exports = exercisesRouter;