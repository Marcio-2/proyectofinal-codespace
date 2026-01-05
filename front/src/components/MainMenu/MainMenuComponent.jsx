import React from "react";
import styles from "./MainMenuComponent.module.css";

export default function MainMenuComponent({ onSelectView }) {
  return (
    <div className={styles.mainMenuContainer}>
      {/* Menu lateral */}
    <nav className={styles.horizontalMenu}>
     <img src="/icons/fitness.svg" alt="Principal" className={styles.menuIcon} />
     <button onClick={() => onSelectView("contact")} className={styles.menuItem}>
      <span>What is MF?</span>
     </button>
     <button onClick={() => onSelectView("warmup")} className={styles.menuItem}>
      <span>Warm up</span>
     </button>
     <button onClick={() => onSelectView("list")} className={styles.menuItem}>
      <span>Exercises</span>
     </button>
     <button onClick={() => onSelectView("create")} className={styles.menuItem}>
      <span>Create routine</span>
     </button>
     <button onClick={() => onSelectView("routinestop")} className={styles.menuItem}>
      <span>Top routines</span>
     </button>
    </nav>
      {/* Company name */}
      <div className={styles.titleCompany}>
        <h1>MF</h1>
        <h2>LEARN TO TRAIN</h2>
      </div>
    </div>
  );
}
