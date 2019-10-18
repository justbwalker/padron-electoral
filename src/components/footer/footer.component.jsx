import React from "react";
import PropTypes from "prop-types";

import "./footer.styles.scss";

const Footer = ({ children }) => {
  return <div className="footer">{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.object.isRequired
};

export default Footer;
