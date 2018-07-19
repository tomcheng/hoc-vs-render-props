import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";

const MyComponent = ({ style }) => (
  <img src={logo} alt="logo" style={{ ...style, height: 80 }} />
);

MyComponent.propTypes = { style: PropTypes.object };

export default MyComponent;
