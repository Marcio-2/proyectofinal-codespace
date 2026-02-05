import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercisesSuccess } from "@/components/ExerciseList/ExerciseListActions";
import { setSelectedExercise } from "@/components/ExerciseDetails/ExerciseDetailsActions";

import MainMenuComponent from "../components/MainMenu/MainMenuComponent";
import ExerciseListComponent from "../components/ExerciseList/ExerciseListComponent";
import ExerciseDetailsComponent from "../components/ExerciseDetails/ExerciseDetailsComponent";
import ContactForm from "../components/Contact/ContactForm";
import WarmUpComponent from "../components/WarmUp/WarmUpComponent";
import RoutinesTopComponent from "@/components/RoutinesTop/RoutinesTopComponent";
import CreateRoutine from "@/components/CreateRoutine/CreateRoutine";
import { RoutineList } from "@/components/RoutineList/RoutineList";
import { RoutineDetails } from "@/components/RoutineDetails/RoutineDetails";
import Login from "../components/Register/Login";
import Profile from "@/components/Profile/Profile";
import Register from "../components/Register/Register";

import { getAllExercises, getExercise } from "../api/exerciseFetch";
import { getAllRoutines, deleteRoutine } from "@/api/routineFetch";

export default function App() {
  const [view, setView] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exerciseList.exercises);
  const selectedExercise = useSelector((state) => state.exerciseDetails.selectedExercise);

  // -------------------- Cargar ejercicios --------------------
  const loadExercises = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAllExercises();
      const exercisesArray = Array.isArray(res) ? res : Array.isArray(res.data) ? res.data : [];
      dispatch(fetchExercisesSuccess(exercisesArray));
    } catch {
      setError("Exercises couldn't be loaded");
      dispatch(fetchExercisesSuccess([]));
    } finally {
      setLoading(false);
    }
  };

  const loadRoutines = async () => {
    try {
      const res = await getAllRoutines();
      const routinesArray = Array.isArray(res.data) ? res.data : [];
      setRoutines(routinesArray);
    } catch {
      setRoutines([]);
    }
  };

  useEffect(() => {
    if (view === "list") loadExercises();
  }, [view]);

  useEffect(() => {
    if (view === "routines") loadRoutines();
  }, [view]);

  // -------------------- Login / Logout --------------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (view === "create" && !isLoggedIn) setView("login");
  }, [view, isLoggedIn]);

  const handleLogin = (nextView) => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setView(token ? nextView || "" : "login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setView("");
  };

  // -------------------- Handlers --------------------
  const handleShowDetail = async (id) => {
    try {
      const fullExercise = await getExercise(id);
      dispatch(setSelectedExercise(fullExercise));
      setView("detail");
    } catch (err) {
      console.error("Error loading exercise:", err);
    }
  };

  const handleBackToMenu = () => {
    dispatch(setSelectedExercise(null));
    setView("");
  };

  const handleBackToList = () => {
    dispatch(setSelectedExercise(null));
    setView("list");
  };

  const handleViewRoutine = (routine) => {
    setSelectedRoutine(routine);
    setView("routineDetail");
  };

  const handleDeleteRoutine = async (id) => {
    try {
      await deleteRoutine(id);
      setRoutines((prev) => prev.filter((r) => r.id !== id));
    } catch {
      alert("Could not delete routine");
    }
  };

  const handleEditRoutine = (routine) => {
    setSelectedRoutine(routine);
    setView("edit");
  };

  // -------------------- Render --------------------
  return (
    <div>
      {view === "" && <MainMenuComponent onSelectView={setView} onLogout={handleLogout} isLoggedIn={isLoggedIn} />}
      {view === "login" && <Login onLogin={(nextView) => handleLogin(nextView || "create")} onNavigate={setView} />}
      {view === "profile" && isLoggedIn && <Profile onNavigate={setView} onBack={handleBackToMenu} />}
      {view === "register" && <Register onNavigate={setView} />}
      {view === "contact" && <ContactForm onBack={handleBackToMenu} />}
      {view === "warmup" && <WarmUpComponent onBack={handleBackToMenu} />}
      {view === "list" && (
        <ExerciseListComponent
          exercises={exercises}
          loading={loading}
          error={error}
          handleShowDetail={handleShowDetail}
          onBack={handleBackToMenu}
        />
      )}
      {view === "detail" && selectedExercise && (
        <ExerciseDetailsComponent exercise={selectedExercise} onBack={handleBackToList} />
      )}
      {view === "create" && <CreateRoutine exercises={exercises} error={error} onNavigate={setView} />}
      {view === "routines" && (
        <RoutineList
          routines={routines}
          onView={handleViewRoutine}
          onDelete={handleDeleteRoutine}
          onBack={() => setView("create")}
          onBackToMenu={handleBackToMenu}
          isLoggedIn={isLoggedIn}
        />
      )}
      {view === "routineDetail" && selectedRoutine && (
        <RoutineDetails
          routine={selectedRoutine}
          onEdit={handleEditRoutine}
          onBack={() => setView("routines")}
          onBackToMenu={handleBackToMenu}
        />
      )}
      {view === "edit" && selectedRoutine && (
        <CreateRoutine
          exercises={exercises}
          error={error}
          onNavigate={setView}
          routineData={selectedRoutine}
          mode="edit"
        />
      )}
      {view === "routinestop" && <RoutinesTopComponent onBack={handleBackToMenu} />}
    </div>
  );
}
