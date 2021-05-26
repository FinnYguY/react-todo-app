import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="wrapper">
      <Header />
      <AddTodo />
      {todoList.length ? (
        <TodoList todoList={todoList} />
      ) : (
        <p>No todos found. Feel free to chill or add some :)</p>
      )}
    </div>
  );
}
