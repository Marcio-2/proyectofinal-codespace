// import { deleteExercise, getExercise } from "@/api/exerciseFetch";
// import React, { useEffect, useState } from "react";
// import EditExerciseDetailsComponent from "./EditExerciseDetailsComponent";

// export default function ExerciseDetailsComponent(props) {
//   const { id, closeExerciseDetails, setExerciseHasChanged, exerciseHasChanged } = props;

//   const [exercise, setExercise] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const loadExercise = async () => {
//       const exerciseAux = await getExercise(id);
//       setExercise(exerciseAux.data);
//     };
//     loadExercise();
//   }, [id]);

//   const initUpdateProcessExercise = () => {
//     setIsEditing(true);
//   };
//   const handlerDeleteExercise = () => {
//     deleteExercise(id);
//     setExerciseHasChanged(!exerciseHasChanged);
//   };
//   return (
//     <div>
//       {
//       !isEditing 
//       ? 
//       (
//         <div>
//           <h2>Exercises Details</h2>
//           <div>
//             <p>Name: {exercise.name}</p>
//             <p>Muscle: {exercise.muscle}</p>
//             <p>Level: {exercise.level}</p>
//           </div>
//           <div>
//             <h4>Options</h4>
//             <div>
//               <button onClick={initUpdateProcessExercise}>
//                 Update Exercise
//               </button>
//               <button onClick={handlerDeleteExercise}>Delete Exercise</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//        <EditExerciseDetailsComponent id={id} exercise={exercise}
//        setExerciseHasChanged={setExerciseHasChanged} 
//        exerciseHasChanged={exerciseHasChanged} 
//        closeExerciseDetails={closeExerciseDetails}/>
//       )}

//       <hr />
//       <div>
//         <button onClick={closeExerciseDetails}>Cerrar Exercises Details</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExerciseAction, deleteExerciseAction } from "./ExerciseDetailsActions";
import { createExercise, updateExercise, deleteExercise } from "@/api/exerciseFetch";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { object, string } from "yup";

export default function ExerciseDetailsComponent({ exercise, onBack, onReload }) {
  const dispatch = useDispatch();

  // Si exercise es null → modo "create", sino modo "view"
  const [viewMode, setViewMode] = useState(exercise ? "view" : "create");

  // Datos seguros para form
  const exerciseData = exercise || { name: "", muscle: "", level: "" };

  const validationSchemaYup = object({
    name: string().required("Name is required"),
    muscle: string().required("Muscle is required"),
    level: string().required("Level is required"),
  });

  // -------------------- Funciones --------------------
  const handleDelete = async () => {
    if (!exerciseData.id) return;
    await deleteExercise(exerciseData.id);
    dispatch(deleteExerciseAction(exerciseData.id));
    onBack();
  };

  const handleEditSubmit = async (values) => {
    if (!exerciseData.id) return;
    await updateExercise(exerciseData.id, values);
    dispatch(updateExerciseAction({ ...exerciseData, ...values }));
    setViewMode("view");
    if (onReload) onReload();
  };

  const handleCreateSubmit = async (values) => {
    await createExercise(values);
    if (onReload) onReload();
    onBack();
  };

  // -------------------- Render --------------------
  if (viewMode === "create") {
    return (
      <div>
        <h2>Create Exercise</h2>
        <Formik
          initialValues={exerciseData}
          onSubmit={handleCreateSubmit}
          validationSchema={validationSchemaYup}
        >
          {() => (
            <Form>
              <div>
                <label>Name</label>
                <Field name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label>Muscle</label>
                <Field name="muscle" placeholder="Muscle" />
                <ErrorMessage name="muscle" component="div" />
              </div>
              <div>
                <label>Level</label>
                <Field name="level" placeholder="Level" />
                <ErrorMessage name="level" component="div" />
              </div>
              <button type="submit">Create</button>
              <button type="button" onClick={onBack}>Cancel</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

  if (viewMode === "view") {
    return (
      <div>
        <h2>Exercise Details</h2>
        <p>Name: {exerciseData.name}</p>
        <p>Muscle: {exerciseData.muscle}</p>
        <p>Level: {exerciseData.level}</p>
        <button onClick={() => setViewMode("edit")}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  if (viewMode === "edit") {
    return (
      <div>
        <h2>Edit Exercise</h2>
        <Formik
          initialValues={exerciseData}
          onSubmit={handleEditSubmit}
          validationSchema={validationSchemaYup}
        >
          {() => (
            <Form>
              <div>
                <label>Name</label>
                <Field name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label>Muscle</label>
                <Field name="muscle" />
                <ErrorMessage name="muscle" component="div" />
              </div>
              <div>
                <label>Level</label>
                <Field name="level" />
                <ErrorMessage name="level" component="div" />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setViewMode("view")}>Cancel</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

  return null;
}
