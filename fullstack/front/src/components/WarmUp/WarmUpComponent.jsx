import React from "react";
import styles from "./WarmUpComponent.module.css";

export default function WarmUpComponent({ onBack }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Warm Up</h1>
              <div className={styles.line}></div>
            </div>

            <ul className={styles.list}>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://youtube.com/shorts/p98nvXU7yq4?si=fIZIC18tO5GbMvdH"
                  target="_blank"
                  rel="noreferrer"
                >
                  Upper body mobility
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://youtube.com/shorts/HEutZebtxl8?si=plPEy2cs4Cba_Cjf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lower body mobility
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://youtu.be/FozCaXSnB6A?si=NicXDgMFj6sT3Rba"
                  target="_blank"
                  rel="noreferrer"
                >
                  Upper body warm-up
                </a>
              </li>
              <li className={styles.listLink}>
                <a
                  className={styles.link}
                  href="https://youtu.be/Ezetigf7STQ?si=D87gVzFi_yQJtOqO"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lower body warm-up
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.imageStretch}>
            <img
              src="/images/streching.webp"
              alt="Warm Up"
              className={styles.image}
            />
            <div className={styles.description}>
              This is the starting point before training: mobility and warm-up. Prepare your body to achieve peak performance.
            </div>
          </div>
        </div>

        <button className={styles.back} onClick={onBack}>
          Menu
        </button>
      </div>
    </div>
  );
}
