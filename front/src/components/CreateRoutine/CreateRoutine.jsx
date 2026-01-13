import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllExercises } from "@/api/exerciseFetch";
import {
  setRoutineName,
  addExercise,
  removeExercise,
  setRoutineEvaluation
} from "./CreateRoutineActions";
import { evaluateRoutine as evalRoutine } from "./RoutineEvaluator";
import { ExerciseSelector, AddExercise, CalificationRoutine } from "./CreateRoutineComponent";
import styles from "./CreateRoutine.module.css";

export default function CreateRoutine({ onBack }) {
  const dispatch = useDispatch();
  const routine = useSelector((state) => state.createRoutine);
  const allExercises = useSelector((state) => state.exerciseList.exercises);

  useEffect(() => {
    if (!allExercises || allExercises.length === 0) {
      getAllExercises().then((res) => {
        dispatch({ type: "FETCH_EXERCISES_SUCCESS", payload: res });
      });
    }
  }, [allExercises, dispatch]);

  const handleAddExercise = (exercise) => dispatch(addExercise(exercise));
  const handleRemoveExercise = (id) => dispatch(removeExercise(id));
  const handleEvaluate = () => dispatch(setRoutineEvaluation(evalRoutine(routine.exercises)));

  if (!routine) return <p>Loading routine...</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        
        <h2>Create Routine</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <input
              type="text"
              placeholder="Routine name"
              value={routine.routineName}
              onChange={(e) => dispatch(setRoutineName(e.target.value))}
              className={styles.input}
            />
            <ExerciseSelector exercises={allExercises || []} onAdd={handleAddExercise} />
            <h4>Added exercises:</h4>
            {routine.exercises?.map((e) => (
              <AddExercise
                key={e.id}
                exercise={e}
                onRemove={handleRemoveExercise}
              />
            ))}
          </div>

          <div className={styles.rightColumn}>
            <CalificationRoutine evaluation={routine.evaluation} />
            <button onClick={handleEvaluate} className={styles.evaluateButton}>
              Evaluate routine
            </button>
          </div>
        </div>

        <button onClick={onBack} className={styles.back}>
          Menú
        </button>

      </div>
    </div>
  );
}


