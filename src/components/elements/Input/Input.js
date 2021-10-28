import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import { InputStyle } from "./Input.styles";

const Input = ({ placeholder, type, icon }) => {
  return <InputStyle placeholder={placeholder} type={type} icon={icon} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
};
Input.defaultProps = {
  placeholder: "Im a placeholder",
  type: "text"
};
Input.defaultProps = {
  placeholder: "Im a placeholder",
  type: "email",
  icon: "laptop"
};
Input.defaultProps = {
  placeholder: "Im a placeholder",
  type: "email",
  icon: "mail_outline"
};

export default Input;
