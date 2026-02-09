import "../styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import store from "../core/redux/store";
import { setUser } from "../components/Profile/ProfileActions";
import { useEffect } from "react";

function InitUser({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; 

    fetch("http://localhost:9000/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "succeeded") {
          dispatch(setUser(data.data, token));
        } else {
          console.warn("Usuario no cargado:", data.error);
          localStorage.removeItem("token"); 
        }
      })
      .catch((err) => {
        console.error("Error al cargar usuario:", err);
        localStorage.removeItem("token"); 
      });
  }, [dispatch]);

  return children;
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <InitUser>
        <Component {...pageProps} />
      </InitUser>
    </Provider>
  );
}

export default MyApp;
