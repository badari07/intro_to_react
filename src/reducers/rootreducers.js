// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM, ADD_API_DATE } from "../action/actionTypes";

// const DEFAULT_STATE = {
//   searchTerm: ""
// };

// const setSearchTerm = (state, action) =>
//   Object.assign({}, state, { searchTerm: action.searchTerm});

// export default (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       // return setSearchTerm(state,action);
//       return { ...state, searchTerm: action.payload };

//     default:
//       return state;
//   }
// };
const searchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATE) {
    return { ...state, [action.payload.imdbID]: action.payload };
    // return Object.assign({}, state, {
    //   [action.payload.imbdID]: action.payload
    // });
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
