import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./ProfileActions";
import styles from "./Profile.module.css";

export default function Profile({ onNavigate }) {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.profile);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      if (!token) return setLoading(false);

      try {
        const res = await fetch("http://localhost:9000/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.status === "succeeded") {
          dispatch(updateUser(data.data));
          setUsername(data.data.username);
          setEmail(data.data.email);
        } else {
          setError(data.error);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token, dispatch]);

  const handleUpdate = async () => {
    if (!token) return;
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      if (photoFile) formData.append("photo", photoFile);

      const res = await fetch("http://localhost:9000/users/me", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (data.status === "succeeded") {
        dispatch(updateUser(data.data));
        setSuccess("Profile updated successfully");
      } else {
        setError(data.error || "Failed to update profile");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  if (loading) return <p style={{ color: "#f1eeeb" }}>Cargando perfil...</p>;
  if (!user) return <p style={{ color: "#f1eeeb" }}>No hay usuario logueado</p>;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img
          src={
            user.photo
              ? `http://localhost:9000${user.photo}`
              : "/default-avatar.png"
          }
          alt="Foto Usuario"
          className={styles.photoProfile}
        />

        <div className={styles.form}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Foto:</label>
          <input
            type="file"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />

          <button className={styles.mainButton} onClick={handleUpdate}>
            Update profile
          </button>

          {success && <p className={styles.successText}>{success}</p>}
          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.menuLink}>
            <button type="button" onClick={() => onNavigate("")}>
              Back to menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
