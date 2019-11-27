// @flow

import { SET_SEARCH_TERM, ADD_API_DATE } from "./actionTypes";

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
});

// export function setSearchTerm(searchTerm) {
//   return {
//     type: SET_SEARCH_TERM ,
//     searchTerm
//   };
// }
export const addApiData = (apiData: show) => ({
  type: ADD_API_DATE,
  payload: apiData
});
