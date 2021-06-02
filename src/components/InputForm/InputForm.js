import React from "react";
import "./InputForm.scss";

export default function InputForm({
  submitHandler,
  defaultValue,
  placeholder,
  onChange,
  children,
}) {
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="form__input"
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="form__submit" type="submit">
        {children}
      </button>
    </form>
  );
}
