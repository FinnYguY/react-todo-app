import modalActionTypes from "../constants/modal";

function getInitialState() {
  if (!localStorage.getItem("isFirstVisit")) {
    localStorage.setItem("isFirstVisit", "true");
  }
  if (localStorage.getItem("isFirstVisit") === "true") {
    localStorage.setItem("isFirstVisit", "false");
    return true;
  }
  return false;
}

const initialState = getInitialState();

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
