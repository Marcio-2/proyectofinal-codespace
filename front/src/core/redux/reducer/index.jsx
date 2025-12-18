import { combineReducers } from "redux";
import exerciseListReducer from "@/components/ExerciseList/ExerciseListReducer";
import exerciseDetailsReducer from "@/components/ExerciseDetails/ExerciseDetailsReducer";

const rootReducer = combineReducers({
  exerciseList: exerciseListReducer,
  exerciseDetails: exerciseDetailsReducer,
  // otros reducers si los tienes
});

export default rootReducer;
