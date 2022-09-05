import { ACTION_TYPES } from "../components/actionTypes.js";

export const INITIAL_STATE = {
  url: ` https://jsonplaceholder.typicode.com/users`,
  loading: false,
  users: [],
  error: false,
  text: "",
  count: 0,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START: {
      return {
        loading: true,
        users: [],
        error: false,
      };
    }
    case ACTION_TYPES.FETCH_URL: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: false,
      };
    }
    case ACTION_TYPES.FETCH_ERROR: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
    case ACTION_TYPES.SET_TEXT: {
      console.log(action.payload);
      return {
        ...state,
        text: action.payload,
      };
    }
    case ACTION_TYPES.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};
