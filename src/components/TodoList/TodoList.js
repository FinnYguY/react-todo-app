import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

export default function TodoList(props) {
  const { todoList, onToggle } = props;

  return (
    <div>
      {todoList.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onChange={onToggle}
          />
        );
      })}
    </div>
  );
}
