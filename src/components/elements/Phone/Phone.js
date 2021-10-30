import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLE
import {
  CountrySelector,
  PhoneField,
  Telephone,
  InputPhone
} from "./Phone.styles";

//IMPORT COMPONENTS
import Input from "../Input/Input";

const Phone = ({ placeholder, type }) => {
  return (
    <PhoneField>
      <CountrySelector
        src="https://ik.imagekit.io/ppayaz/ppayaz-website/flag_fQzludPB8.png?updatedAt=1634221524609"
        alt="flag"
      />
      <Telephone>
        <InputPhone placeholder="Número telefónico" type={type} />
      </Telephone>
    </PhoneField>
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

export default Phone;
