import React from "react";
import InView from "../InView/InView";
import style from "./AboutSection.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  imgSrc?: StaticImageData;
};

export default function AboutSection({ children, imgSrc }: Props) {
  return (
    <>
      <InView>
        <section className={style.aboutSection}>
          <div className={style.text}>{children}</div>
          {imgSrc && <Image className={style.aboutImg} src={imgSrc} alt="" />}
        </section>
      </InView>
    </>
  );
}
