import React from "react";
import { useSelector } from "react-redux";
import { filterTypes } from "./constants/filter";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterList from "./components/FilterList/FilterList";

export default function App() {
  const todoList = useSelector((state) => state.todoList.todoList);
  const filter = useSelector((state) => state.filter);

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
      <Header />
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
  );
}
