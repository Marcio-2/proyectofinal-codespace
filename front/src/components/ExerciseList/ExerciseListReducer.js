import { FETCH_EXERCISES_SUCCESS } from "./ExerciseListActions";

const initialState = {
  exercises: [],
};

export default function exerciseListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXERCISES_SUCCESS:
      return { ...state, exercises: action.payload };
    default:
      return state;
  }
}
