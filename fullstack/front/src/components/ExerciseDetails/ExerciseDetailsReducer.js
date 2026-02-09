import {
  SET_SELECTED_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
} from "./ExerciseDetailsActions";

const initialState = {
  selectedExercise: null,
};

export default function exerciseDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_EXERCISE:
      return { ...state, selectedExercise: action.payload };
    case UPDATE_EXERCISE:
      return { ...state, selectedExercise: action.payload };
    case DELETE_EXERCISE:
      return { ...state, selectedExercise: null };
    default:
      return state;
  }
}
