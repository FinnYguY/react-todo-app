import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTypes } from "./constants/filter";
import { showModal } from "./store/actions";

import Modal from "./components/Modal/Modal";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterList from "./components/FilterList/FilterList";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todoList);
  const filter = useSelector((state) => state.filter);
  const isModalShown = useSelector((state) => state.showModal);

  if (!localStorage.getItem("isFirstVisit")) {
    localStorage.setItem("isFirstVisit", "true");
  }
  if (localStorage.getItem("isFirstVisit") === "true") {
    dispatch(showModal());
    localStorage.setItem("isFirstVisit", "false");
  }

  function getFilteredList(todoList, filter) {
    switch (filter) {
      case filterTypes.SHOW_ACTIVE:
        return todoList.filter((todo) => !todo.isDone);
      case filterTypes.SHOW_COMPLETED:
        return todoList.filter((todo) => todo.isDone);
      default:
        return todoList;
    }
  }

  return (
    <div className="wrapper">
      <p className="header">
        TodoList using{" "}
        <a className="link code" href="https://reactjs.org/">
          React
        </a>
      </p>
      <div className="content">
        <AddTodo />
        {todoList.length ? (
          <div>
            <TodoList todoList={getFilteredList(todoList, filter)} />
            <FilterList />
          </div>
        ) : (
          <p>No todos found. Feel free to chill or add some :)</p>
        )}
      </div>
      <Modal>
        <h1 className="modal__header">Hi there!</h1> <br />
        <p className="modal__text">
          Here I give ya some free space to organize ur affairs <br />
          <br /> Just add new 'todos' and check / remove when u're done with 'em{" "}
          <br />
          <br /> Web site stores all ur data locally on a device, so u may close
          the tab and be sure that those 'todos' still exist : )
        </p>
      </Modal>
      {!isModalShown && (
        <div className="footer">
          <button
            className="default-button"
            onClick={() => dispatch(showModal())}
          >
            Show info
          </button>
        </div>
      )}
    </div>
  );
}
