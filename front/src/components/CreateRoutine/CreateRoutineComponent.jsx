import React from "react";
import styles from "./CreateRoutine.module.css";

export const ExerciseSelector = ({ exercises, onAdd, selectedExercises }) => {
  if (!Array.isArray(exercises) || exercises.length === 0) {
    return <p>No exercises loaded</p>;
  }

  return (
    <div className={styles.selector}>
      <h4>Select exercise:</h4>
      <ul className={styles.exerciseList}>
        {exercises.map((ex) => {
          const isDisabled = selectedExercises.some((e) => e.id === ex.id);

          return (
            <li key={ex.id} className={styles.exerciseOption}>
              {ex.name} ({ex.muscle})
              <button
                className={styles.addButton}
                onClick={() => onAdd(ex)}
                disabled={selectedExercises.some((e) => e.id === ex.id)}
              >
                Add
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const RemoveExercise = ({ exercise, onRemove }) => (
  <div className={styles.exerciseItem}>
    {exercise?.name} | {exercise?.level}
    <button
      className={styles.removeButton}
      onClick={() => onRemove(exercise.id)}
    >
      Remove
    </button>
  </div>
);

export const CalificationRoutine = ({ evaluation }) => {
  if (!evaluation) {
    return <p>Routine has not been evaluated yet</p>;
  }

  if (!evaluation.rating) {
    return (
      <div className={styles.summary}>
        <h4>Difficulty: {evaluation.difficulty || "N/A"}</h4>
        <p>"Evaluate routine" to recalculate rating</p>
      </div>
    );
  }

  const getColor = (rating) => {
    switch (rating) {
      case "bad":
        return "#9d372c";
      case "medium":
        return "#f1c40f";
      case "good":
        return "#1d884a";
      default:
        return "#fff";
    }
  };

  const color = getColor(evaluation.rating);

  return (
    <div className={styles.summary}>
      <h4 style={{ color }}>{evaluation.rating.toUpperCase()}</h4>
      <p>Score: {evaluation.score}</p>

      {evaluation.reasons?.length > 0 && (
        <div className={styles.reasonList}>
          {evaluation.reasons.map((r, i) => (
            <div
              key={i}
              className={styles.reasonCard}
              style={{ borderLeft: `5px solid ${color}` }}
            >
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
