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

import { getAllExercises, getExercise } from "../api/exerciseFetch";

export default function App() {
  const [view, setView] = useState(""); // "", "list", "detail", "contact", etc.
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
      const exercisesArray = Array.isArray(res) ? res : Array.isArray(res.data) ? res.data : [];
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
  const handleShowDetail = async (id) => {
    try {
      const fullExercise = await getExercise(id); // fetch del ejercicio completo
      dispatch(setSelectedExercise(fullExercise));
      setView("detail"); // cambiar a vista detalle
    } catch (err) {
      console.error("Error cargando ejercicio:", err);
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

  // -------------------- Render --------------------
  return (
    <div>
      {/* Menú principal */}
      {view === "" && <MainMenuComponent onSelectView={setView} />}

      {/* Contact */}
      {view === "contact" && <ContactForm onBack={handleBackToMenu} />}

      {/* Warm-up */}
      {view === "warmup" && <WarmUpComponent onBack={handleBackToMenu} />}

      {/* Lista de ejercicios */}
      {view === "list" && (
        <ExerciseListComponent
          exercises={exercises}
          loading={loading}
          error={error}
          handleShowDetail={handleShowDetail} // pasa solo el id
          onBack={handleBackToMenu}
        />
      )}

      {/* Detalle del ejercicio */}
   {view === "detail" && selectedExercise && (
  <>
    {console.log("selectedExercise:", selectedExercise)}
    <ExerciseDetailsComponent
      exercise={selectedExercise}
      onBack={handleBackToList}
    />
  </>
)}


      {/* Routines-top */}
      {view === "routinestop" && (
        <RoutinesTopComponent onBack={handleBackToMenu} />
      )}
    </div>
  );
}
