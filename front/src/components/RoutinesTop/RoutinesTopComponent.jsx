import React from "react";
import styles from "./RoutinesTopComponent.module.css"

export default function RoutinesTopComponent({ onBack }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Routines Top</h1>
              <div className={styles.line}></div>
            </div>

            <ul className={styles.list}>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://enfaf.com/rutina-push-pull-leg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Push / Pull / Legs
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://www.trainologym.com/todo-sobre-la-rutina-fullbody/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full Body
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://fitnessreal.es/rutina-torso-pierna-intermedios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Upper / Lower
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://fullmusculo.com/rutina-weider/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weider
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://www.cambiatufisico.com/triseries/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Triserie
                </a>
              </li>
                    <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://www.vitonica.com/musculacion/definicion-vitonica-2-0-rutina-5-dias-semana-8-especial-biseries-xiv"
                  target="_blank"
                  rel="noreferrer"
                >
                 Biserie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button className={styles.back} onClick={onBack}>
          Menu
        </button>
      </div>
    </div>
  );
}
