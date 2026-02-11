import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/components/Profile/ProfileActions";
import styles from "./Register.module.css";

export default function Login({ onNavigate, onLogin }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(formData.email)) {
      setError("Invalid email format. Example: 'name@email.com'");
      return;
    }

    try {
      const res = await fetch("http://localhost:9000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Guardar token y actualiza en Redux
      localStorage.setItem("token", data.data.token);
      dispatch(setUser(data.data.user, data.data.token));
      onLogin("create");
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>Login</h3>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="username"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          {error && <p className={styles.errorText}>{error}</p>}

          <button className={styles.mainButton} type="submit">
            Login
          </button>

          <div className={styles.userQuestion}>
            <span>Don’t have an account?</span>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => onNavigate("register")}
            >
              Create user
            </button>
          </div>

          <div className={styles.menuLink}>
            <button type="button" onClick={() => onNavigate("")}>
              Back to menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
