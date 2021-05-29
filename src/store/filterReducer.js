import { filterActionTypes, filterTypes } from "../constants/filter";

const initialState = filterTypes.SHOW_ALL;

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case filterActionTypes.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;
