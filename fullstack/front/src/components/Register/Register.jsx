import React, { useState } from "react";
import styles from "./Register.module.css";

export default function Register({ onNavigate }) {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    photo: null,
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files && files[0]) {
      setPreview(URL.createObjectURL(files[0]));
      setRegisterData({ ...registerData, photo: files[0] });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!validateEmail(registerData.email)) {
      setError("Invalid email format. 'Example: name@email.com'");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("username", registerData.username);
    formData.append("email", registerData.email);
    formData.append("password", registerData.password);
    if (registerData.photo) formData.append("photo", registerData.photo);

    try {
      const res = await fetch("http://localhost:9000/users/register", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Register failed");
        return;
      }
      setSuccess("User created successfully");
      setTimeout(() => {
        onNavigate("login");
      }, 800);
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>Create user</h3>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label>Username</label>
          <input name="username" onChange={handleChange} required />

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <label>
            Photo
            <span className={styles.textHelp}>
              {" "}
              (valid image file: jpg, png, webp, gif)
            </span>
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />

          {preview && (
            <img src={preview} alt="preview" className={styles.preview} />
          )}

          <button
            className={styles.mainButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating user..." : "Register"}
          </button>

          {error && <p className={styles.errorText}>{error}</p>}
          {success && <p className={styles.successText}>{success}</p>}

          <div className={styles.userQuestion}>
            <span>Already have an account?</span>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => onNavigate("login")}
            >
              Login
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
