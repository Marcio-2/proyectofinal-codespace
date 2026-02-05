import React from "react";
import styles from "./ExerciseDetailsComponent.module.css";

export default function ExerciseDetailsComponent({ exercise, onBack }) {
  if (!exercise) return <p>No exercise selected.</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          {/* Columna izquierda: texto */}
          <div className={styles.textColumn}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                {exercise.name} | {exercise.muscle}
              </h1>
            </div>

            <div className={styles.details}>
              {/* Description */}
              {exercise.description && (
                <div>
                  <h3>DESCRIPTION</h3>
                  <p className={styles.description}>
                    {exercise.description}
                  </p>
                </div>
              )}
              {/* Video link */}
              {exercise.videoUrl && (
                <a
                  href={exercise.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.video}
                >
                  VIDEO
                </a>
              )}
              {/* Alternatives */}
              {exercise.alternatives?.length > 0 && (
                <div>
                  <h3>EXERCISES ALTERNATIVES</h3>
                  <div className={styles.alternativesExercises}>
                    {exercise.alternatives.map((alt, index) => (
                      <div
                        key={index}
                        className={styles.alternativesImages}
                      >
                        {alt.imageUrl && (
                          <img
                            src={alt.imageUrl}
                            alt={alt.name}
                            className={styles.alternativeImageSmall}
                          />
                        )}
                        <span className={styles.alternativeName}>
                          {alt.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Back button */}
        <div className={styles.back} onClick={onBack}>
          Back
        </div>
      </div>
    </div>
  );
}
