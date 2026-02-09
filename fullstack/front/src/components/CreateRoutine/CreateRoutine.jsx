import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllExercises } from "@/api/exerciseFetch";
import { saveRoutine, updateRoutine } from "@/api/routineFetch";
import { fetchExercisesSuccess } from "../ExerciseList/ExerciseListActions";
import {
  resetRoutine,
  setRoutineName,
  addExercise,
  removeExercise,
  setRoutineEvaluation,
} from "./CreateRoutineActions";
import { evaluateRoutine as evalRoutine } from "./RoutineEvaluator";
import {
  ExerciseSelector,
  RemoveExercise,
  CalificationRoutine,
} from "./CreateRoutineComponent";
import styles from "./CreateRoutine.module.css";

export default function CreateRoutine({
  onNavigate,
  mode = "create",
  routineData = null,
}) {
  const dispatch = useDispatch();
  const routine = useSelector((state) => state.createRoutine);
  const exercisesList = useSelector((state) => state.exerciseList.exercises);
  const [nameError, setNameError] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (!exercisesList || exercisesList.length === 0) {
      getAllExercises()
        .then((res) => dispatch(fetchExercisesSuccess(res)))
        .catch((err) => console.error("Error loading exercises:", err));
    }
  }, [exercisesList, dispatch]);

  // Precargar rutina (al editar rutina)
  useEffect(() => {
    if (
      !isEditMode ||
      !routineData ||
      !exercisesList ||
      exercisesList.length === 0
    )
      return;

    dispatch(resetRoutine());
    dispatch(setRoutineName(routineData.name));

    const loadedExercises = routineData.exercises.map((ex, index) => {
      const fullEx =
        exercisesList.find((e) => e.id === ex.id) ||
        exercisesList.find((e) => e.name === ex.name);
      return fullEx
        ? { ...fullEx, ...ex, id: fullEx.id }
        : { ...ex, id: ex.id || `tmp-${index}` };
    });

    loadedExercises.forEach((ex) => dispatch(addExercise(ex)));

    if (routineData.difficulty) {
      dispatch(setRoutineEvaluation({ difficulty: routineData.difficulty }));
    }
  }, [isEditMode, routineData, exercisesList, dispatch]);

  //Handlers
  const handleAddExercise = (exercise) => dispatch(addExercise(exercise));
  const handleRemoveExercise = (id) => dispatch(removeExercise(id));
  const handleEvaluate = () =>
    dispatch(setRoutineEvaluation(evalRoutine(routine.exercises)));

  const handleSaveRoutine = async () => {
    if (!routine.routineName) return setNameError(true);
    if (routine.exercises.length === 0) return;

    let evaluation = routine.evaluation || evalRoutine(routine.exercises);
    dispatch(setRoutineEvaluation(evaluation));

    const payload = {
      name: routine.routineName,
      exercises: routine.exercises,
      difficulty: evaluation.difficulty,
    };

    const result = isEditMode
      ? await updateRoutine({ ...payload, id: routineData.id })
      : await saveRoutine(payload);

    if (!result.ok) {
      setSaveError(result.error);
      return;
    }

    dispatch(resetRoutine());
    setNameError(false);
    setSaveError(null);
    onNavigate("routines");
  };

  if (!routine) return <p>Loading routine...</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{isEditMode ? "Edit Routine" : "Create Routine"}</h2>
          <div className={styles.line}></div>
        </div>

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
              placeholder={nameError ? "Name is required!" : "Routine name..."}
              value={routine.routineName}
              onChange={(e) => {
                dispatch(setRoutineName(e.target.value));
                if (nameError) setNameError(false);
              }}
              className={`${styles.input} ${nameError ? styles.inputError : ""}`}
            />

            <ExerciseSelector
              exercises={exercisesList || []}
              onAdd={handleAddExercise}
              selectedExercises={routine.exercises || []}
            />

            <h4>Added exercises:</h4>
            {routine.exercises?.map((e) => (
              <RemoveExercise
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
              disabled={routine.exercises.length === 0}
            >
              {isEditMode ? "Update Routine" : "Save Routine"}
            </button>
            {/* Mensaje de error al guardar rutina */}
            {saveError && <p className={styles.errorText}>{saveError}</p>}
          </div>
        </div>

        <button onClick={() => onNavigate("")} className={styles.back}>
          Menu
        </button>
      </div>
    </div>
  );
}
