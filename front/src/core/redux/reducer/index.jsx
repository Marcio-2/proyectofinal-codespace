import { combineReducers } from "redux";
import exerciseListReducer from "@/components/ExerciseList/ExerciseListReducer";
import exerciseDetailsReducer from "@/components/ExerciseDetails/ExerciseDetailsReducer";
import createRoutineReducer from "@/components/CreateRoutine/CreateRoutineReducer";
import profileReducer from "@/components/Profile/ProfileReducer";

const rootReducer = combineReducers({
  exerciseList: exerciseListReducer,
  exerciseDetails: exerciseDetailsReducer,
  createRoutine: createRoutineReducer,
  profile: profileReducer,
});

export default rootReducer;

