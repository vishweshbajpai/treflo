export const FETCHED = "FETCHED";
export const LOADING = "LOADING";
export const TOGGLE_CART = "TOGGLE_CART";
export const TOGGLE_VEG = "TOGGLE_VEG";
export const SORT_PRICE = "SORT_PRICE";
export const SORT_RATING = "SORT_RATING";
export const ADD_MODAL_CONTENT = "ADD_MODAL_CONTENT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
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
export const removeFromCart = (data) => {
  return { type: REMOVE_FROM_CART, payload: data };
};
export const reduceQuantity = (data) => {
  return { type: REDUCE_QUANTITY, payload: data };
};
export const increaseQuantity = (data) => {
  return { type: INCREASE_QUANTITY, payload: data };
};
