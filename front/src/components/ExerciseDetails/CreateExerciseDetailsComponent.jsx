// import { createExercise } from "@/api/exerciseFetch";
// import React, { useState } from "react";

// export default function CreateExerciseDetailsComponent(props) {

//   const { setExerciseHasChanged, exerciseHasChanged, closeExerciseCreation } = props;

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

//   const crearExercise = async () => {
//     await createExercise({
//         name,
//         muscle,
//         level
//     })
//    setExerciseHasChanged(!exerciseHasChanged)
//    closeExerciseCreation()
//   }

//   return (
//     <div>
//       <h2>Create Exercise</h2>
//       <div>
//         <div>
//           <div>
//             <span>Name: </span>
//             <input value={name} onChange={handlerOnChangeName} />
//           </div>
//           <div>
//             <span>Muscle: </span>
//             <input value={muscle} onChange={handlerOnChangeMuscle} />
//           </div>
//           <div>
//             <span>Level: </span>
//             <input value={level} onChange={handlerOnChangeLevel} />
//           </div>
//           <div>
//             <button onClick={crearExercise}>Create</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
