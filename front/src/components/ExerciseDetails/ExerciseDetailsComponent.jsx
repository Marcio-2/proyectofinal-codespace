import { deleteExercise, getExercise } from "@/api/exerciseFetch";
import React, { useEffect, useState } from "react";
import EditExerciseDetailsComponent from "./EditExerciseDetailsComponent";

export default function ExerciseDetailsComponent(props) {
  const { id, closeExerciseDetails, setExerciseHasChanged, exerciseHasChanged } = props;

  const [exercise, setExercise] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadExercise = async () => {
      const exerciseAux = await getExercise(id);
      setExercise(exerciseAux.data);
    };
    loadExercise();
  }, [id]);

  const initUpdateProcessExercise = () => {
    setIsEditing(true);
  };
  const handlerDeleteExercise = () => {
    deleteExercise(id);
    setExerciseHasChanged(!exerciseHasChanged);
  };
  return (
    <div>
      {
      !isEditing 
      ? 
      (
        <div>
          <h2>Exercises Details</h2>
          <div>
            <p>Name: {exercise.name}</p>
            <p>Muscle: {exercise.muscle}</p>
            <p>Level: {exercise.level}</p>
          </div>
          <div>
            <h4>Options</h4>
            <div>
              <button onClick={initUpdateProcessExercise}>
                Update Exercise
              </button>
              <button onClick={handlerDeleteExercise}>Delete Exercise</button>
            </div>
          </div>
        </div>
      ) : (
       <EditExerciseDetailsComponent id={id} exercise={exercise}
       setExerciseHasChanged={setExerciseHasChanged} 
       exerciseHasChanged={exerciseHasChanged} 
       closeExerciseDetails={closeExerciseDetails}/>
      )}

      <hr />
      <div>
        <button onClick={closeExerciseDetails}>Cerrar Exercises Details</button>
      </div>
    </div>
  );
}
