import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo, editTodo } from "../../store/actions";
import InputForm from "../InputForm/InputForm";
import classNames from "classnames";
import "./TodoItem.scss";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [toEdit, setToEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const titleClasses = classNames({
    title: true,
    "title-done": todo.isDone,
  });

  function submitHandler(event) {
    event.preventDefault();

    if (inputValue.trim()) {
      setToEdit(false);
      dispatch(editTodo(todo.id, inputValue));
    }
  }

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
        {toEdit ? (
          <InputForm
            submitHandler={submitHandler}
            defaultValue={todo.todo}
            placeholder="Edit this todo here"
            onChange={(event) => setInputValue(event.target.value)}
          >
            Edit
          </InputForm>
        ) : (
          <div className={titleClasses}>{todo.todo}</div>
        )}
      </div>

      <div className="todo-item__buttons">
        <button
          className="todo-item__button edit"
          onClick={() => setToEdit(!toEdit)}
        >
          <i className="fas fa-edit"></i>
        </button>

        <button
          className="todo-item__button remove"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
