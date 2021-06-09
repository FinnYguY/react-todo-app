import React from "react";
import { Link } from "react-router-dom";
import { modal, modal__body, modal__body__button } from "./Modal.module.scss";

export default function Modal({ children }) {
  return (
    <div className={modal}>
      <div className={modal__body}>
        {children}
        <Link to="/">
          <button className={modal__body__button}>Alright</button>
        </Link>
      </div>
    </div>
  );
}
