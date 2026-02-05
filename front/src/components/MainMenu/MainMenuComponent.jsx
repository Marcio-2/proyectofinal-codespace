import React from "react";
import styles from "./MainMenuComponent.module.css";

export default function MainMenuComponent({
  onSelectView,
  onLogout,
  isLoggedIn,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <nav className={styles.horizontalMenu}>
          <img
            src="/icons/fitness.svg"
            alt="Principal"
            className={styles.menuIcon}
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

        <div className={styles.userButtons}>
          {isLoggedIn ? (
            <>
              <button
                className={styles.profileButton}
                onClick={() => onSelectView("profile")}
              >
                Profile
              </button>

              <button className={styles.logoutButton} onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.loginButton}
                onClick={() => onSelectView("login")}
              >
                Login
              </button>

              <button
                className={styles.registerButton}
                onClick={() => onSelectView("register")}
              >
                Create User
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles.titleCompany}>
        <h1>MF</h1>
        <h2>LEARN TO TRAIN</h2>
      </div>
    </div>
  );
}
