import React, { useState } from "react";
import "./navbar.css";
import ButtonGradiant from "../Buttons/ButtonGradiant";
import logo from "../../assets/logoKicksoft.svg";

const Navbar = () => {
  const [isScolling, setIsScolling] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setIsScolling(true) : setIsScolling(false);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={`navbar ${isScolling ? "scroll-navbar" : ""}`}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#about">About US</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#projects">Games</a>
        </li>
        <li>
          <a href="#trust">Trust Us</a>
        </li>
      </ul>
      <ButtonGradiant text={"Contact us"} herf="contact" />
    </div>
  );
};

export default Navbar;
