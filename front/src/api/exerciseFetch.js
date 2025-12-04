export const getAllExcercises = async () => {
    //Peticion al back
    const response = await fetch('http://localhost:9000/exercises')
    const exercises = await response.json()
    return exercises
}