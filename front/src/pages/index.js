import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercisesSuccess } from "@/components/ExerciseList/ExerciseListActions";
import { setSelectedExercise } from "@/components/ExerciseDetails/ExerciseDetailsActions";

import MainMenuComponent from "../components/MainMenu/MainMenuComponent";
import ExerciseListComponent from "../components/ExerciseList/ExerciseListComponent";
import ExerciseDetailsComponent from "../components/ExerciseDetails/ExerciseDetailsComponent";
import ContactForm from "../components/Contact/ContactForm";
import WarmUpComponent from "../components/WarmUp/WarmUpComponent";
import BackButton from "../components/BackButton";

import { getAllExercises } from "../api/exerciseFetch";
import RoutinesTopComponent from "@/components/RoutinesTop/RoutinesTopComponent";

export default function App() {
  const [view, setView] = useState(""); // "", "list", "detail", "create", "contact"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exerciseList.exercises);
  const selectedExercise = useSelector(
    (state) => state.exerciseDetails.selectedExercise
  );

  // -------------------- Cargar ejercicios --------------------
  const loadExercises = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAllExercises();
      const exercisesArray = Array.isArray(res)
        ? res
        : Array.isArray(res.data)
        ? res.data
        : [];
      dispatch(fetchExercisesSuccess(exercisesArray));
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los ejercicios");
      dispatch(fetchExercisesSuccess([]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (view === "list") loadExercises();
  }, [view]);

  // -------------------- Handlers --------------------
  const handleShowDetail = (exercise) => {
    dispatch(setSelectedExercise(exercise));
    setView("detail");
  };

  const handleBackToMenu = () => {
    dispatch(setSelectedExercise(null));
    setView("");
  };

  const handleCreate = () => {
    dispatch(setSelectedExercise(null));
    setView("create");
  };

  // -------------------- Render --------------------
  return (
    <div>
      {/* Menú principal con fondo y títulos */}
      {view === "" && <MainMenuComponent onSelectView={setView} />}

       {/* Contact */}
      {view === "contact" && <ContactForm onBack={handleBackToMenu} />}

       {/* Warm-up */}
      {view === "warmup" && <WarmUpComponent onBack={handleBackToMenu} />}

      {/* Lista de ejercicios */}
      {view === "list" && (
        <div>
          <ExerciseListComponent
            exercises={exercises}
            loading={loading}
            error={error}
            handleShowDetail={handleShowDetail}
            onBack={handleBackToMenu}
          />
          {/* <BackButton onClick={handleBackToMenu} /> */}
        </div>
      )}

      {/* Detalle / Create */}
      {(view === "detail" || view === "create") && (
        <ExerciseDetailsComponent
          exercise={selectedExercise}
          onBack={handleBackToMenu}
          onReload={loadExercises}
        />
      )}

      {/* Routines-top */}
      {view === "routinestop" && <RoutinesTopComponent onBack={handleBackToMenu} />}

    </div>
  );
}
