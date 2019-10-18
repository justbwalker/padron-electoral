import React from "react";
import PropTypes from "prop-types";

import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => (
  <button className="button" {...otherProps}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
