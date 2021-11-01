import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import {
  NameField,
  NameWrapper,
  InputName,
  LastName,
  InputLast,
  IconStyle
} from "./Name.styles";

const Name = ({ type, icon }) => {
  return (
    <NameField>
      <NameWrapper>
        <IconStyle>{icon}</IconStyle>
        <InputName placeholder="Nombre" type={type} />
      </NameWrapper>
      <LastName>
        <InputLast placeholder="Apellido" type={type} />
      </LastName>
    </NameField>
  );
};

Name.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};

Name.defaultProps = {
  placeholder: "Im a placeholder",
  type: "text",
  icon: "person"
};

export default Name;
