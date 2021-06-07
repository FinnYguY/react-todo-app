import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../store/actions";
import { modal, modal__body, modal__body__button } from "./Modal.module.scss";

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal);

  return (
    showModal && (
      <div className={modal}>
        <div className={modal__body}>
          {children}
          <button
            className={modal__body__button}
            onClick={() => dispatch(hideModal())}
          >
            Alright
          </button>
        </div>
      </div>
    )
  );
}
