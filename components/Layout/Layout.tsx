import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InView from "../InView/InView";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <InView>
        <main>{children}</main>
      </InView>
      <Footer />
    </>
  );
}
