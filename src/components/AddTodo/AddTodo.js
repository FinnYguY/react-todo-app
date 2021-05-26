import React, { useState } from "react";
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

export default function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input className="form__input" {...input.bind} />
      <button className="form__submit" type="submit">
        Add
      </button>
    </form>
  );
}
