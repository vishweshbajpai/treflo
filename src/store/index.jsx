import { createStore } from "redux";
import { FETCHED } from "../actions";

const initialState = {
  data: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED: {
      state = { ...state, data: action.payload };
      return state;
    }
    default: {
      return state;
    }
  }
};
const store = createStore(mainReducer);

export default store;
