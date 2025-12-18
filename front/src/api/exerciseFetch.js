export const getAllExercises = async () => {
    //Peticion al back
    const response = await fetch('http://localhost:9000/exercises')
    const exercises = await response.json()
    return exercises
}


export const getExercise = async (id) => {
    //Peticion al back
    const response = await fetch('http://localhost:9000/exercises/'+id)
    const exercises = await response.json()
    return exercises
}

export const deleteExercise = async (id) => {
   const response = await fetch('http://localhost:9000/exercises/' + id, {
    method: "DELETE",
  });
  const exerciseDelete = await response.json();
  if (exerciseDelete.error) console.log(exerciseDelete.error);
  console.log("todo fue bien");
  return;
}

export const updateExercise = async (id, bodyParam) => {
  try {
    const response = await fetch('http://localhost:9000/exercises/' + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyParam), 
    });
    const exerciseUpdated = await response.json();
    if (!response.ok || exerciseUpdated.error) {
      throw new Error(exerciseUpdated.error || "Error al actualizar ejercicio");
    }
    return exerciseUpdated;
  } catch (error) {
    console.error("Error en updateExercise:", error);
    throw error; 
  }
};


export const createExercise = async (bodyParam) => {
  console.log("📦 bodyParam enviado al backend:", bodyParam);
  try {
    const response = await fetch('http://localhost:9000/exercises/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyParam),
    });

    const exerciseCreated = await response.json();
    if (exerciseCreated.error) {
      console.error("Error al crear Exercise:", exerciseCreated.error);
      return null;
    }
    console.log("Exercise creado:", exerciseCreated);
    return exerciseCreated;
  } catch (error) {
    console.error("Error en la petición:", error);
    return null;
  }
};