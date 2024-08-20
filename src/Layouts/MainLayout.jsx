import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
export const MainLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
