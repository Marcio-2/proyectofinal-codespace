export const SET_SELECTED_EXERCISE = "SET_SELECTED_EXERCISE";
export const UPDATE_EXERCISE = "UPDATE_EXERCISE";
export const DELETE_EXERCISE = "DELETE_EXERCISE";

export const setSelectedExercise = (exercise) => ({
  type: SET_SELECTED_EXERCISE,
  payload: exercise,
});

export const updateExerciseAction = (exercise) => ({
  type: UPDATE_EXERCISE,
  payload: exercise,
});

export const deleteExerciseAction = (exerciseId) => ({
  type: DELETE_EXERCISE,
  payload: exerciseId,
});
