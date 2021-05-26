import React, { useContext } from "react";
import Context from "../../context";
import "./TodoItem.scss";

export default function TodoItem(props) {
  const { todo, index, onChange } = props;
  const { removeTodo } = useContext(Context);
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
          onChange={() => onChange(todo.id)}
        />
        <span className="id">{index + 1}</span>
        <span className={titleClasses.join(" ")}>{todo.todo}</span>
      </span>
      <button className="todo-item__remove" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </div>
  );
}
