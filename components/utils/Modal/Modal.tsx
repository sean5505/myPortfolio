import React from "react";
import style from "./Modal.module.scss"

type Props = {
  children: React.ReactNode;
  title: string;
  isModalOpen: boolean;
  closeModal: () => void;
  performFunction?: () => void;
};

export default function Modal({
  children,
  title,
  isModalOpen,
  closeModal,

}: Props) {
  return (
    <>
      {isModalOpen?  (
        <div className={style.overlay} >
        <dialog
        className={style.container}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-content"
          open
        >
          <header className={style.modalHead}>
            <h4 id="dialog-title" className={style.title}>
              {title}
            </h4>
            <button className={style.closeButton} onClick={() => closeModal()}>
              &times;
            </button>
          </header>
          <div id="dialog-content" className={style.content}>
            {children}
          </div>
        </dialog>
        </div>
        
      ) : null}
    </>
  );
}
