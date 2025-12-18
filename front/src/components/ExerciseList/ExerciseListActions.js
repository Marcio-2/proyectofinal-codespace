export const FETCH_EXERCISES_SUCCESS = "FETCH_EXERCISES_SUCCESS";

export const fetchExercisesSuccess = (exercises) => ({
  type: FETCH_EXERCISES_SUCCESS,
  payload: exercises,
});
