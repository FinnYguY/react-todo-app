import modalActionTypes from "../constants/modal";

const initialState = false;

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return action.showModal;
    case modalActionTypes.HIDE_MODAL:
      return action.showModal;
    default:
      return state;
  }
}

export default modalReducer;
