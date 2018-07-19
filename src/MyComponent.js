import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";

const MyComponent = props => (
  <img
    {...props}
    src={logo}
    alt="logo"
    style={{ ...props.style, height: 80 }}
  />
);

MyComponent.propTypes = {
  style: PropTypes.object
};

export default MyComponent;
