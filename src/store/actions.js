import todoActionTypes from "../constants/todoList";
import filterActionTypes from "../constants/filter";
import modalActionTypes from "../constants/modal";

export const addTodo = (todo) => ({
  type: todoActionTypes.ADD_TODO,
  todo,
});

export const toggleTodo = (id) => ({
  type: todoActionTypes.TOGGLE_TODO,
  id,
});

export const editTodo = (id, todo) => ({
  type: todoActionTypes.EDIT_TODO,
  id,
  todo,
});

export const removeTodo = (id) => ({
  type: todoActionTypes.REMOVE_TODO,
  id,
});

export const setFilter = (filter) => ({
  type: filterActionTypes.SET_FILTER,
  filter,
});

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
  showModal: true,
});

export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
  showModal: false,
});
