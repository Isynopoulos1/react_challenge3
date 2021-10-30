import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import { ButtonStyle } from "./Button.styles";

const Button = ({ label }) => {
  return <ButtonStyle>{label}</ButtonStyle>;
};

Button.propTypes = {
  label: PropTypes.string
};

Button.defaultProps = {
  label: "button 1"
};

export default Button;
