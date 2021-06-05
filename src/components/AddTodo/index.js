import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions";
import "./AddTodo.scss";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

export default function AddTodo() {
  const input = useInputValue("");
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      dispatch(addTodo(input.value()));
      input.clear();
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input className="form__input" placeholder="New todo" {...input.bind} />
      <button className="form__submit" type="submit">
        Add
      </button>
    </form>
  );
}
