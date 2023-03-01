import { LOG_OUT, SET_DATA, SET_PLAYER, SET_USER } from "./Constants";

export const setState = (state) => ({
  type: SET_DATA,
  state,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const setPlayer = (state) => ({
  type: SET_PLAYER,
  state,
});

export const setUser = (state) => ({
  type: SET_USER,
  state,
})