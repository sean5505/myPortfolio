import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InView from "../InView/InView";
import Modal from "../Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };
  return (
    <>
      <Header />
      <InView>
        <main>{children}</main>
        <Modal modal={modal} toggleModal={toggleModal}><FeedbackForm/> </Modal>
      </InView>
      <Footer toggleModal={toggleModal} />
    </>
  );
}
