import React from "react";
import styles from "./CreateRoutine.module.css";

export function ExerciseSelector({ exercises, onAdd }) {
  if (!Array.isArray(exercises) || exercises.length === 0) {
    return <p>There are no loaded exercises</p>;
  }

  return (
    <div className={styles.selector}>
      <h4>Select exercise:</h4>
      <ul className={styles.exerciseList}>
        {exercises.map((ex) => (
          <li key={ex.id} className={styles.exerciseOption}>
            {ex.name} ({ex.muscle})
            <button
              onClick={() => onAdd(ex)}
              className={styles.addButton}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const AddExercise = ({ exercise, onRemove }) => (
  <div className={styles.exerciseItem}>
    {exercise.name} | {exercise.level}
    <button
      onClick={() => onRemove(exercise.id)}
      className={styles.removeButton}
    >
      Eliminate
    </button>
  </div>
);

export const CalificationRoutine = ({ evaluation }) => {
  if (!evaluation) return <p>The routine has not yet been evaluated</p>;

  const getColor = (rating) => {
    switch (rating) {
      case "bad":
        return "#9d372c"; 
      case "medium":
        return "#f1c40f"; 
      case "good":
        return "#2ecc71";
      default:
        return "#fff";
    }
  };

  const color = getColor(evaluation.rating);

  return (
    <div className={styles.summary}>
      <h4 style={{ color }}>{evaluation.rating.toUpperCase()}</h4>
      <p>Score: {evaluation.score}</p>

      {evaluation.reasons.length > 0 && (
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
