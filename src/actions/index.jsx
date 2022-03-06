export const FETCHED = "FETCHED";
export const LOADING = "LOADING";
export const TOGGLE_CART = "TOGGLE_CART";
export const TOGGLE_VEG = "TOGGLE_VEG";
export const SORT_PRICE = "SORT_PRICE";
export const SORT_RATING = "SORT_RATING";
export const ADD_MODAL_CONTENT = "ADD_MODAL_CONTENT";
export const ADD_TO_CART = "ADD_TO_CART";
export const fetchedData = (data) => {
  return { type: FETCHED, payload: data };
};
export const setLoading = (data) => {
  return { type: LOADING, payload: data };
};
export const toggleCart = () => {
  return { type: TOGGLE_CART };
};
export const toggleVeg = (data) => {
  return { type: TOGGLE_VEG, payload: data };
};
export const sortPrice = () => {
  return { type: SORT_PRICE };
};
export const sortRating = () => {
  return { type: SORT_RATING };
};
export const addModalContent = (data) => {
  return { type: ADD_MODAL_CONTENT, payload: data };
};
export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};
