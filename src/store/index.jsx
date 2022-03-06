import { createStore } from "redux";
import {
  ADD_MODAL_CONTENT,
  ADD_TO_CART,
  FETCHED,
  LOADING,
  SORT_PRICE,
  SORT_RATING,
  TOGGLE_CART,
  TOGGLE_VEG,
} from "../actions";

const initialState = {
  data: [],
  modalContent: [],
  cartList: [],
  isLoading: false,
  cartIsShown: false,
  isVeg: false,
  sortByRating: true,
  sortByPrice: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED: {
      state = { ...state, data: action.payload };
      return state;
    }
    case LOADING: {
      let newState = { ...state, isLoading: action.payload };
      return newState;
    }
    case TOGGLE_CART: {
      state = { ...state, cartIsShown: !state.cartIsShown };
      return state;
    }
    case TOGGLE_VEG: {
      state = { ...state, isVeg: action.payload };
      return state;
    }
    case SORT_RATING: {
      state = { ...state, sortByRating: true, sortByPrice: false };
      return state;
    }
    case SORT_PRICE: {
      state = { ...state, sortByRating: false, sortByPrice: true };
      return state;
    }
    case ADD_MODAL_CONTENT: {
      state = { ...state, modalContent: action.payload };
      return state;
    }
    case ADD_TO_CART: {
      state = { ...state, cartList: [...state.cartList, action.payload] };
      return state;
    }
    default: {
      return state;
    }
  }
};
const store = createStore(mainReducer);

export default store;
