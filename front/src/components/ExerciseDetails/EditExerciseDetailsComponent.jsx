// import { updateExercise } from "@/api/exerciseFetch";
// import React, { useState } from "react";

// export default function EditExerciseDetailsComponent(props) {

//   const { id, exercise, setExerciseHasChanged, exerciseHasChanged, closeExerciseDetails } = props;

//   const [name, setName] = useState("");
//   const [muscle, setMuscle] = useState("");
//   const [level, setLevel] = useState("");

//   const handlerOnChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const handlerOnChangeMuscle = (e) => {
//     setMuscle(e.target.value);
//   };
//   const handlerOnChangeLevel = (e) => {
//     setLevel(e.target.value);
//   };

//   const saveExercise = async () => {
//     await updateExercise(id,{
//         name,
//         muscle,
//         level
//     })
//    setExerciseHasChanged(!exerciseHasChanged)
//    closeExerciseDetails()
//   }

//   return (
//     <div>
//       <h2>Edit Exercise</h2>
//       <div>
//         <h2>Exercise Details | Updating </h2>
//         <div>
//           <div>
//             <input value={name} onChange={handlerOnChangeName} placeholder={exercise.name}/>
//           </div>
//           <div>
//             <input value={muscle} onChange={handlerOnChangeMuscle} placeholder={exercise.muscle}/>
//           </div>
//           <div>
//             <input value={level} onChange={handlerOnChangeLevel} placeholder={exercise.level}/>
//           </div>
//           <div>
//             <button onClick={saveExercise}>Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
