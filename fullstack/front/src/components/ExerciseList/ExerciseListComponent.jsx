import React from "react";
import styles from "./ExerciseListComponent.module.css";

export default function ExerciseListComponent({
  exercises,
  loading,
  error,
  handleShowDetail,
  onBack
}) {
  if (loading) return <p>Loading exercises...</p>;
  if (error) return <p>{error}</p>;
  if (!exercises || exercises.length === 0) return <p>No exercises found.</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Columna izquierda: texto */}
          <div className={styles.textColumn}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Exercises</h1>
              <div className={styles.line}></div>
            </div>
            <ul className={styles.list}>
              {exercises.map((exercise) => (
                <li className={styles.listItem}>
                  <span className={styles.name} onClick={() => handleShowDetail(exercise.id)}>{exercise.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha: imagen + texto debajo */}
          <div className={styles.imageExercises}>
            <img
              src="/images/list-exercise.jpeg"
              alt="List exercise"
              className={styles.image}
            />
            <div className={styles.description}>List exercise</div>
          </div>
        </div>

        {/* Back button */}
        <div className={styles.back} onClick={onBack}>
          Menu
        </div>
      </div>
    </div>
  );
}
