import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllExercises } from "@/api/exerciseFetch";
import { saveRoutine } from "@/api/routineFetch";
import { fetchExercisesSuccess } from "../ExerciseList/ExerciseListActions";
import { resetRoutine } from "./CreateRoutineActions";
import {
  setRoutineName,
  addExercise,
  removeExercise,
  setRoutineEvaluation,
} from "./CreateRoutineActions";
import { evaluateRoutine as evalRoutine } from "./RoutineEvaluator";
import {
  ExerciseSelector,
  AddExercise,
  CalificationRoutine,
} from "./CreateRoutineComponent";
import styles from "./CreateRoutine.module.css";

export default function CreateRoutine({ onNavigate }) {
  const dispatch = useDispatch();
  const routine = useSelector((state) => state.createRoutine);
  const allExercises = useSelector((state) => state.exerciseList.exercises);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    const loadExercises = async () => {
      if (!allExercises || allExercises.length === 0) {
        try {
          const res = await getAllExercises();
          dispatch(fetchExercisesSuccess(res));
        } catch (error) {
          console.error("Error loading exercises:", error);
        }
      }
    };
    loadExercises();
  }, [allExercises, dispatch]);

  useEffect(() => {
  if (routine.exercises.length === 0) {
    dispatch(setRoutineEvaluation(null)); 
  }
}, [routine.exercises, dispatch]);

  const handleAddExercise = (exercise) => dispatch(addExercise(exercise));
  const handleRemoveExercise = (id) => dispatch(removeExercise(id));
  const handleEvaluate = () =>
   dispatch(setRoutineEvaluation(evalRoutine(routine.exercises)));
  const handleSaveRoutine = async () => {
    if (!routine.routineName) {
      setNameError(true);
      return;
    }
    if (routine.exercises.length === 0) {
      return;
    }
   let evaluation = routine.evaluation;
  if (!evaluation) {
    evaluation = evalRoutine(routine.exercises);
    dispatch(setRoutineEvaluation(evaluation)); 
  }
    try {
     await saveRoutine({
        name: routine.routineName,
        exercises: routine.exercises,
        difficulty: evaluation.difficulty,
      });
      dispatch(resetRoutine());
      setNameError(false);
    } catch (error) {
      console.error("Error saving routine:", error);
    }
  };

  if (!routine) return <p>Loading routine...</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Create Routine</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <button
              onClick={() => onNavigate("routines")}
              className={styles.menuButton}
            >
              View my routines
            </button>

            <input
              type="text"
              placeholder={
                nameError ? " Name is required!" : "Routine name.."
              }
              value={routine.routineName}
              onChange={(e) => {
                dispatch(setRoutineName(e.target.value));
                if (nameError) setNameError(false);
              }}
              className={`${styles.input} ${
                nameError ? styles.inputError : ""
              }`}
            />
            <ExerciseSelector
              exercises={allExercises || []}
              onAdd={handleAddExercise}
            />
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

            <button
              onClick={handleEvaluate}
              className={styles.evaluateButton}
              disabled={routine.exercises.length === 0}
            >
              Evaluate routine
            </button>

            <button
              onClick={handleSaveRoutine}
              className={styles.saveButton}
              disabled={routine.exercises.length === 0 }
              
            >
              Save Routine
            </button>
          </div>
        </div>

        <button onClick={() => onNavigate("")} className={styles.back}>
          Menú
        </button>
      </div>
    </div>
  );
}
