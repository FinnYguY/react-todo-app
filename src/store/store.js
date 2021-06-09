import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./todoListReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
