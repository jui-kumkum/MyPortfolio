import React from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <a
          href="https://github.com/jui-kumkum"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </Fade>
  );
}