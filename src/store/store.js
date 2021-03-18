import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state

const initialState = { user: { token: "" }, messageData: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETMESSAGES = "GETMESSAGES";
export const CREATEUSER = "CREATEUSER";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case GETMESSAGES:
      return { messageData: action.payload }
    case CREATEUSER:
      return state;
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
//
