import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state

const initialState = { user: { token: "" }, messageData: [], loggedInUser: {} };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GETUSER"
export const GET_MESSAGES = "GETMESSAGES";
export const DELETE_USER = "DELETEUSER"

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GET_USER:
      return { loggedInUser: action.payload }
    case GET_MESSAGES:
      return { messageData: action.payload };
    case DELETE_USER:
      return { user: {} };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
//
