import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import { InputWrapper, InputStyle, IconStyle } from "./Input.styles";

const Input = ({ placeholder, type, icon }) => {
  return (
    <InputWrapper>
      <IconStyle>{icon}</IconStyle>
      <InputStyle placeholder={placeholder} type={type} />
    </InputWrapper>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};

Input.defaultProps = {
  placeholder: "Im a placeholder",
  type: "text",
  icon: ""
};

export default Input;
