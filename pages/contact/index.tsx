import ContactCard from "@/components/ContactCard";
import Email from "@/public/assets/Email.jpg";
import Phone from "@/public/assets/Phone.png";
import style from "@/styles/pages/Contact.module.scss";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
  let cardDelay = 0
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={style.header}
      >
        Drop me a message
      </motion.h2>
      <section className={style.contactSection}>
        <ContactCard
          contactImgSrc={Email}
          methodOfContact="Email"
          info="idea40@live.com"
          action="Copy Email"
        />
        <ContactCard
          contactImgSrc={Phone}
          methodOfContact="Phone Number"
          info="+1 347-733-1419"
          action="Copy Phone Number"
          cardDelay={(cardDelay += .5)} 
        /> {/*for each card, increment cardDelay increment by .5 */}
        
      </section>
    </>
  );
}
