import { combineReducers } from "redux";
import exerciseListReducer from "@/components/ExerciseList/ExerciseListReducer";
import exerciseDetailsReducer from "@/components/ExerciseDetails/ExerciseDetailsReducer";
import createRoutineReducer from "@/components/CreateRoutine/CreateRoutineReducer";

const rootReducer = combineReducers({
  exerciseList: exerciseListReducer,
  exerciseDetails: exerciseDetailsReducer,
  createRoutine: createRoutineReducer,
});

export default rootReducer;

