import React from "react";
import "./footer.css";
import logo from "../../assets/logoKicksoft.svg";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/Insta.svg";
import twiter from "../../assets/twiter.svg";
import linkedIn from "../../assets/linkedIn.svg";
import ButtonGradiant from "../Buttons/ButtonGradiant";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      {/* <div className="mail-box">
        <div className="mail-box-text">
          <h5>Stay in the loop</h5>
          <p>
            Subscribe to receive the latest news and updates about kicksoft
            Studio.
          </p>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter email address" />
          <ButtonGradiant herf="" text="Continue" />
        </div>
      </div> */}
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <h5>Game development startup</h5>
        </div>
        <div className="footer-middle">
          <ul>
            <li>Pages</li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#projects">Games</a>
            </li>
            <li>
              <a href="#trust">Trusted us</a>
            </li>
          </ul>
          <ul>
            <li>Contact us</li>
            <li>Manouba Pole 1 bloc C</li>
            <li>+216 92 927 119</li>
            <li>contact@kicksoftstudio.com</li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/kicksoft.tn/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/kicksoft.tn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://www.linkedin.com/company/kicksoft-tn/?originalSubdomain=tn">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="https://discord.gg/AevesHDH">
            <img src={twiter} alt="twiter" />
          </a>
        </div>
      </div>
      <div className="tail">
        <h4>Copyright ® 2024 Kicksoft Studio. All rights Rcerved</h4>
      </div>
    </div>
  );
};

export default Footer;
