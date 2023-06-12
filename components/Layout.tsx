import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InView from "./InView";
import Modal from "./Modal";

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
        <Modal modal={modal} toggleModal={toggleModal} />
      </InView>
      <Footer toggleModal={toggleModal} />
    </>
  );
}
