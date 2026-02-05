import React from "react";
import styles from "./RoutineList.module.css";

const RoutineOptions = ({ routine, onView, onDelete, isLoggedIn }) => (
  <li className={styles.routineOption}>
    <span className={styles.routineName}>{routine.name}</span>
    <div className={styles.buttonsRoutine}>
      <button className={styles.viewButton} onClick={() => onView(routine)} disabled={!isLoggedIn}>
        View
      </button>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(routine.id)}
        disabled={!isLoggedIn} 
      >
        Delete
      </button>
    </div>
  </li>
);

export const RoutineList = ({
  routines,
  onView,
  onDelete,
  onBack,
  onBackToMenu,
  isLoggedIn,
}) => {
  const hasRoutines = Array.isArray(routines) && routines.length > 0;
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>Your routines</h3>

        {hasRoutines ? (
          <ul className={styles.list}>
            {routines.map((routine) => (
              <RoutineOptions
                key={routine.id}
                routine={routine}
                onView={onView}
                onDelete={onDelete}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>There are no routines created</p>
        )}

        <div className={styles.back}>
          <button className={styles.menuButton} onClick={onBackToMenu}>
            Menu
          </button>
          <button className={styles.backButton} onClick={onBack}>
            Back to Create Routine
          </button>
        </div>
      </div>
    </div>
  );
};
