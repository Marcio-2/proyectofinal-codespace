export const setRoutineName = (name) => ({
  type: "SET_ROUTINE_NAME",
  payload: name
});

export const addExercise = (exercise) => ({
  type: "ADD_EXERCISE",
  payload: exercise
});

export const removeExercise = (id) => ({
  type: "REMOVE_EXERCISE",
  payload: id
});

export const updateExercise = (id, updates) => ({
  type: "UPDATE_EXERCISE",
  payload: { id, updates }
});

export const setRoutineEvaluation = (evaluation) => ({
  type: "EVALUATE_ROUTINE",
  payload: evaluation
});
