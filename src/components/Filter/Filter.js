import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/actions";
import "./Filter.scss";

export default function Filter({ filter, children }) {
  const dispatch = useDispatch();

  return (
    <button
      className="filter__button"
      onClick={() => dispatch(setFilter(filter))}
    >
      {children}
    </button>
  );
}
