import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./todoListReducer";
import filterReducer from "./filterReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
  showModal: modalReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
