import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({onBack}) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.overlay}></div>

      <div className={styles.textBox}>
        <h1 className={styles.companyTitle}>MF</h1>
        <h2 className={styles.companySubtitle}>LEARN TO TRAIN</h2>

        <p className={styles.companyMotto}>
          Our main goal is for you to learn how to structure your routine and become your own coach
        </p>
        <p className={styles.backMenu} onClick={onBack} >
          www.mf.com
        </p>
        <p className={styles.contactInfo}>
          contact us:<br />
          Marcio Elliott | 643 078 777
        </p>
      </div>
    </div>
  );
}
