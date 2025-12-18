// import { createExercise } from "@/api/exerciseFetch";
// import React, { useState } from "react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { object, string } from "yup";

// export default function CreateExerciseDetailsComponentFormik(props) {
//   const { setExerciseHasChanged, exerciseHasChanged, closeExerciseCreation } =
//     props;

//   // const [name, setName] = useState("");
//   // const [muscle, setMuscle] = useState("");
//   // const [level, setLevel] = useState("");

//   // const handlerOnChangeName = (e) => {
//   //   setName(e.target.value);
//   // };
//   // const handlerOnChangeMuscle = (e) => {
//   //   setMuscle(e.target.value);
//   // };
//   // const handlerOnChangeLevel = (e) => {
//   //   setLevel(e.target.value);
//   // };

//   // const crearExercise2 = async () => {
//   //   await createExercise({
//   //       name,
//   //       muscle,
//   //       level
//   //   })
//   //  setExerciseHasChanged(!exerciseHasChanged)
//   //  closeExerciseCreation()
//   // }

//   const crearExercise = async (opts) => {
//     await createExercise(opts);
//     setExerciseHasChanged(!exerciseHasChanged);
//     closeExerciseCreation();
//   };
//   //Esquema de validacion
//   const validationSchemaYup = object({
//     name: string().required(),
//     muscle: string().required(),
//     level: string().required(),
//   });

//   return (
//     <div>
//       <h2>Create Exercise</h2>
//       <div>
//         {/* <div>
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
//         </div> */}
//         <Formik
//           initialValues={{
//             name: "",
//             muscle: "",
//             level: "",
//           }}
//           onSubmit={(values) => crearExercise(values)}
//           validationSchema={validationSchemaYup}
//         >
//           {({ errors }) => (
//             <Form>
//               <div>
//                 <span>Name </span>
//                 <Field type="text" name="name" placeholder="Name..." />
//                 <ErrorMessage name="name" component="div" />
//               </div>
//               <div>
//                 <span>Muscle </span>
//                 <Field type="text" name="muscle" placeholder="Muscle..." />
//                 <ErrorMessage name="muscle" component="div" />
//               </div>
//               <div>
//                 <span>Level </span>
//                 <Field type="text" name="level" placeholder="Level..." />
//                 <ErrorMessage name="level" component="div" />
//               </div>
//               <button type="submit">Create exercise</button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }
