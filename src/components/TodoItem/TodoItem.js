import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/actions";
import "./TodoItem.scss";

export default function TodoItem(props) {
  const { todo, index } = props;
  const dispatch = useDispatch();
  const titleClasses = ["title"];

  if (todo.isDone) {
    titleClasses.push("done");
  }

  return (
    <div className="todo-item">
      <span className="todo-item__desc">
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.isDone}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className="id">{index + 1}</span>
        <span className={titleClasses.join(" ")}>{todo.todo}</span>
      </span>
      <button
        className="todo-item__remove"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        &times;
      </button>
    </div>
  );
}
