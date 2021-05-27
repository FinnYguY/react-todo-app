import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterList from "./components/FilterList/FilterList";

export default function App() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="wrapper">
      <Header />
      <AddTodo />
      {todoList.length ? (
        <div>
          <TodoList todoList={todoList} />
          <FilterList />
        </div>
      ) : (
        <p>No todos found. Feel free to chill or add some :)</p>
      )}
    </div>
  );
}
