export const FETCHED = "FETCHED";

export const fetchedData = (data) => {
  return { type: FETCHED, payload: data };
};
