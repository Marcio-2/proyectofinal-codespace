import React, { useEffect, useState } from 'react'
import { getAllExcercises } from '../api/exerciseFetch'

export default function index() {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
     const getAllExcercisesAux = async () => {
        const exercisesAux = await getAllExcercises()
        setExercises(exercisesAux.exercises)
     }
     getAllExcercisesAux()
    },[])
  return (
    <>
      <h1>Exercises</h1>
      {
        exercises.map((exercise, index) => {
            return <div key={index}>
                <span>{exercise.name}</span>
            </div>
        })
      }
    </>
  )
}
