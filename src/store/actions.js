import actionTypes from "../constants/todoList";

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  todo,
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  id,
});
