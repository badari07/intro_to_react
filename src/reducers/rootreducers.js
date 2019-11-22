import { SET_SEARCH_TERM } from "../action/actionTypes";

const DEFAULT_STATE = {
  searchTerm: ""
};

// const setSearchTerm = (state, action) =>
//   Object.assign({}, state, { searchTerm: action.searchTerm});

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      // return setSearchTerm(state,action);
      return { ...state, searchTerm: action.searchTerm };
    default:
      return state;
  }
};

export default rootReducer;
