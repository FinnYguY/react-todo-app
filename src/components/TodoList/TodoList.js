import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

export default function TodoList(props) {
  const { todoList } = props;

  return (
    <div className="todo-list">
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
