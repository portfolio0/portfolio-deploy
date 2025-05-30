import React from "react";
import "./hamburger.css";
import Navbar from "../navbar/Navbar";
const Hamburger = () => {
  const ham_click = () => {};
  return (
    <div className="container" onClick={() => ham_click()}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;
