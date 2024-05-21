import Image, { StaticImageData } from "next/image";
import style from "./ContactCard.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

type Props = {
  contactImgSrc: StaticImageData;
  methodOfContact: string;
  info: string;
  action: string;
  cardDelay?: number;
};

export default function ContactCard(props: Props) {
  const handleClick: () => void = () => {
    toast(` Copied to Clipboard!`);
  };
  return (
    <>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: props.cardDelay ? props.cardDelay : 0,
        }}
        className={style.contactCard}
      >
        <Image
          className={style.contactLogo}
          src={props.contactImgSrc}
          alt={props.methodOfContact}
        />
        <h2 className={style.contactMethod}>{props.methodOfContact}</h2>
        {props.info && <div>{props.info}</div>}
        <CopyToClipboard text={props.info}>
          <button className={style.cardButton} onClick={() => handleClick()}>
            {props.action}
          </button>
        </CopyToClipboard>
      </motion.div>
    </>
  );
}
