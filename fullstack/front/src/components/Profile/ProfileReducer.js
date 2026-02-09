import { SET_USER, LOGOUT_USER, UPDATE_USER } from "./ProfileActions";

const initialState = {
  user: null,
  token: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user, token: action.payload.token };
    case LOGOUT_USER:
      return { ...state, user: null, token: null };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
