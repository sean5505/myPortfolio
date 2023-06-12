import React, { useState } from "react";
import style from "@/styles/components/Modal.module.scss";
import FeedbackForm from "@/components/FeedbackForm";

type Props = {
  modal: Boolean;
  toggleModal: () => void;
  
}; //edit code to makeit so that the modal can accept more than various components instead of just the feedback aka children ans use as a wrapper component
export default function Modal({ modal, toggleModal, }: Props) {
  return (
    <>
      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modalContent}>
            <FeedbackForm />
            <button className={style.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
