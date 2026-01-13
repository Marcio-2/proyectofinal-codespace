
const initialState = {
  routineName: "",
  exercises: [], 
  evaluation: null 
};

export default function createRoutineReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ROUTINE_NAME":
      return { ...state, routineName: action.payload };
    
    case "ADD_EXERCISE":
      if (state.exercises.some(e => e.id === action.payload.id)) return state;
      return { ...state, exercises: [...state.exercises, action.payload] };
    
    case "REMOVE_EXERCISE":
      return { ...state, exercises: state.exercises.filter(e => e.id !== action.payload) };
    
    case "UPDATE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.map(e =>
          e.id === action.payload.id ? { ...e, ...action.payload.updates } : e
        )
      };
    
    case "EVALUATE_ROUTINE":
      return { ...state, evaluation: action.payload };
    
    default:
      return state;
  }
}
