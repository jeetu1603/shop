import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Google,
  Pinterest,
} from "@mui/icons-material";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="email">
          <input type="text" placeholder="enter your email" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
