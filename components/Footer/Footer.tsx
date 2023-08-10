import React from "react";
import {  FaGithub, FaRegFilePdf, } from "react-icons/fa";
import style from "./Footer.module.scss";

type Props = {
  toggleModal: () => void;
};

export default function Footer({ toggleModal }: Props) {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/sean5505" target="_blank">
        <button className={style.footerButton}>
          <FaGithub /> Github
        </button>
      </a>

      <a href="/files/StevenGibson_Resume.pdf" target="_blank">
        <button className={style.footerButton}>
          <FaRegFilePdf /> Resume
        </button>
      </a>

      <button className={style.footerButton} onClick={toggleModal}>
       Feedback
      </button>
    </footer>
  );
}
