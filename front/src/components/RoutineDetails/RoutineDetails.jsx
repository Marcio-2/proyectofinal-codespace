import React from "react";
import styles from "./RoutineDetails.module.css";

const ExerciseItem = ({ exercise }) => (
  <li className={styles.exerciseItem}>
    {exercise.name}: {exercise.sets}x{exercise.reps}  {exercise.rest}"
  </li>
);

export const RoutineDetails = ({ routine, onBack, onBackToMenu }) => {
  if (!routine) return <p>Loading routine...</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>{routine.name}</h2>

        <div className={styles.exercisesSection}>
          <h4>Exercises:</h4>
          {routine.exercises && routine.exercises.length > 0 ? (
            <ul className={styles.exerciseList}>
              {routine.exercises.map((ex) => (
                <ExerciseItem key={ex.id} exercise={ex} />
              ))}
            </ul>
          ) : (
            <p>No exercises added</p>
          )}

          <h4>Difficulty - {routine.difficulty || "N/A"}</h4>
        </div>

        <div className={styles.back}>
          <button className={styles.menuButton} onClick={onBackToMenu}>
            Menu
          </button>
          <button className={styles.backButton} onClick={onBack}>
            Back to Routine List
          </button>
        </div>
      </div>
    </div>
  );
};
