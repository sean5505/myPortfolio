import React, { useState } from "react";
import style from "./Modal.module.scss";

type Props = {
  modal: Boolean;
  toggleModal: () => void;
  children: React.ReactNode;
  
};
export default function Modal({ modal, toggleModal, children }: Props) {
  return (
    <>
      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modalContent}>
            {children}
            <button className={style.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
