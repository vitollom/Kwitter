import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

export let username

if (initialState.user.username) {
  username = initialState.user.username
} else {
  username = ""
}

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATEUSER = "UPDATEUSER"

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)))
