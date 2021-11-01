import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import { NameField, NameWrapper, InputName, LastName } from "./Name.styles";

//IMPORT COMPONENTS
import Input from "../Input/Input";

const Name = ({ placeholder, type }) => {
  return (
    <NameField>
      <NameWrapper>
        <InputName placeholder="Nombre" type={type} />
      </NameWrapper>
      <LastName>
        <InputName placeholder="Apellido" type={type} />
      </LastName>
    </NameField>
  );
};
Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  placeholder: "Im a placeholder",
  type: "text"
};
export default Name;
