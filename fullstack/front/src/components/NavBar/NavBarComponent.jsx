import React from "react";
import styles from "./NavBarComponent.module.css";

export default function NavBarComponent({
  onSelectView,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <nav className={styles.horizontalMenu}>
          <img
            src="/icons/fitness.svg"
            alt="Principal"
            className={styles.menuIcon}
            onClick={() => onSelectView("menu")}
          />

          <button
            onClick={() => onSelectView("contact")}
            className={styles.menuItem}
          >
            What is MF?
          </button>

          <button
            onClick={() => onSelectView("warmup")}
            className={styles.menuItem}
          >
            Warm up
          </button>

          <button
            onClick={() => onSelectView("list")}
            className={styles.menuItem}
          >
            Exercises
          </button>

          <button
            onClick={() => onSelectView("create")}
            className={styles.menuItem}
          >
            Create routine
          </button>

          <button
            onClick={() => onSelectView("routinestop")}
            className={styles.menuItem}
          >
            Top routines
          </button>
        </nav>
      </div>
    </div>
  );
}
