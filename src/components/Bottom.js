import React from "react";
import { render } from "react-dom";

const Footer = () => (
  <footer className="footer">
    <p>Copyright by @NTRHOTEL</p>
  </footer>
);

render([<Footer key="2" />], document.getElementById("root"));

export default Footer;