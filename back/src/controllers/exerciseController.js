const { find } = require("../mocks/exercisesMethodMongoDB")


const getExercises = (req, res) => {
    try{

        const allExercises = find()
        
        res.status(200).json({
            exercises: allExercises
        })

    }catch(error){
        res.status(500)
    }
}

module.exports = {
    getExercises
}