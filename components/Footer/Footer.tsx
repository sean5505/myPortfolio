import React from "react";
import {  FaGithub, FaRegFilePdf, } from "react-icons/fa";
import style from "./Footer.module.scss";
import FeedbackForm from "../FeedbackForm/FeedbackForm";



export default function Footer() {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/sean5505" target="_blank">
        <button className={style.footerButton} title="Github">
          <FaGithub /> Github
        </button>
      </a>

      <a href="/files/StevenGibson_Resume.pdf" target="_blank">
        <button className={style.footerButton} title="Resume">
          <FaRegFilePdf /> Resume
        </button>
      </a>
      <FeedbackForm/>
    </footer>
  );
}
