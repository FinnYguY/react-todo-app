import React from "react";
import PropTypes from "prop-types";
import "./InputForm.scss";

function InputForm({
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

InputForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default InputForm;
