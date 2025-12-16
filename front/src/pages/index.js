import React, { useEffect, useState } from "react";
import { getAllExcercises } from "../api/exerciseFetch";
import ExerciseDetailsComponent from "@/components/ExerciseDetails/ExerciseDetailsComponent";
import CreateExerciseDetailsComponentFormik from "@/components/ExerciseDetails/CreateExerciseDetailsComponentFormik";

export default function index() {
  const [exercises, setExercises] = useState([]);
  const [exerciseId, setExerciseId] = useState(null);
  const [exerciseHasChanged, setExerciseHasChanged] = useState(false);
  const [isCreating, setIsCreating] = useState(false)

  const getAllExcercisesAux = async () => {
    const exercisesAux = await getAllExcercises();
    setExercises(exercisesAux.data);
  };

  useEffect(() => {
    getAllExcercisesAux();
  }, []);

    useEffect(() => {
    getAllExcercisesAux()
    setExerciseHasChanged(false)
    closeExerciseDetails()
  }, [exerciseHasChanged]);

  const handlerOnClick = (id) => {
    setExerciseId(id);
  };

  const closeExerciseDetails = () => {
    setExerciseId(null);
  }

  const handlerCreateExercise = () => {
    setIsCreating(true)
  }

  const closeExerciseCreation =() => {
    setIsCreating(false)
  }

  return (
    <>
      <h1>Exercises</h1>

      <div>
        {
          !isCreating 
          ?
          <button onClick={handlerCreateExercise}>Create Exercise</button>
          :
          <CreateExerciseDetailsComponentFormik setExerciseHasChanged={setExerciseHasChanged} 
          exerciseHasChanged={exerciseHasChanged}
          closeExerciseCreation={closeExerciseCreation}
          />
        }
        
      </div>
      <br/>

      {
      exercises && exercises.map((exercise, index) => {
          return (
            <div key={index}>
              <span>{exercise.id} | </span>
              <span>{exercise.name} | </span>
              <span>
                <button
                  onClick={() => {
                    handlerOnClick(exercise.id);
                  }}
                >
                  Ver Ejercicio
                </button>
              </span>
            </div>
          );
        })}
      <hr />
      {exerciseId && (
        <ExerciseDetailsComponent
          id={exerciseId}
          closeExerciseDetails={closeExerciseDetails}
          setExerciseHasChanged={setExerciseHasChanged}
          exerciseHasChanged={exerciseHasChanged}
        />
      )}
    </>
  );
}
