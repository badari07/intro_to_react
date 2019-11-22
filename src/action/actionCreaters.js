import { SET_SEARCH_TERM } from "./actionTypes";

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
});

// export function setSearchTerm(searchTerm) {
//   return {
//     type: SET_SEARCH_TERM,
//     searchTerm
//   };
// }
