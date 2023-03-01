import { LOG_OUT, SET_DATA, SET_PLAYER, SET_USER } from "./Constants";

const data = JSON.parse(sessionStorage.getItem("data"));
const players = JSON.parse(sessionStorage.getItem("players"));
const users = JSON.parse(sessionStorage.getItem("users"));

export const initialState = {
  profile: data ? data.profile : {},
  accessToken: data ? data.accessToken : null,
  player: players ? players : [],
  users: users ? users : [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.state,
      };
    case SET_PLAYER:
      return {
        ...state,
        player: [...action.state],
      };
    case SET_USER:
      return {
        ...state,
        users: [...action.state],
      };

    case LOG_OUT:
      sessionStorage.removeItem("data");
      sessionStorage.removeItem("players");
      return {
        ...state,
        profile: {},
        accessToken: null,
        player: [],
      };
    default:
      return state;
  }
};
