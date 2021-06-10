import todoActionTypes from "../constants/todoList";
import { takeEvery, put, call } from "redux-saga/effects";
import { getTodosSuccess, getTodosFailure } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(todoActionTypes.TODOS_REQUEST, sagaWorker);
}

function* sagaWorker() {
  try {
    const todoList = yield call(getTodoList);
    yield put(getTodosSuccess(todoList));
  } catch (e) {
    yield put(getTodosFailure(e));
  }
}

function getTodoList() {
  const state = localStorage.getItem("state");

  return JSON.parse(state).todoList;
}
