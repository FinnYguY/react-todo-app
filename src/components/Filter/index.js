import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/actions";
import classNames from "classnames";
import "./Filter.scss";

export default function Filter({ filter, children }) {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  let buttonClasses = classNames({
    filter__button: true,
    filter__button_active: filter === currentFilter,
  });

  return (
    <button
      className={buttonClasses}
      onClick={() => dispatch(setFilter(filter))}
    >
      {children}
    </button>
  );
}
