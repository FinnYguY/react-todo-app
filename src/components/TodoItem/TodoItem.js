import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/actions";
import classNames from "classnames";
import "./TodoItem.scss";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const titleClasses = classNames({
    title: true,
    "title-done": todo.isDone,
  });

  return (
    <div className="todo-item">
      <div className="todo-item__desc">
        <input
          id={`box-${todo.id}`}
          type="checkbox"
          checked={todo.isDone}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <label htmlFor={`box-${todo.id}`}>&nbsp;</label>
        <div className={titleClasses}>{todo.todo}</div>
      </div>
      <button
        className="todo-item__remove"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        &times;
      </button>
    </div>
  );
}
