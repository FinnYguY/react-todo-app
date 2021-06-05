import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/";
import { filterTypes } from "../../constants/filter";
import "./TodoList.scss";

export default function TodoList() {
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
    <div className="todo-list">
      {getFilteredList(todoList, filter).map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
