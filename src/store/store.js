import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas.js";

import todoListReducer from "./todoListReducer";
import filterReducer from "./filterReducer";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(sagaWatcher);

export default store;
