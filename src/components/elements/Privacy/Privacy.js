import React from "react";

//IMPORT STYLES
import { PrivacyLink, TextLink } from "./Privacy.styles";

const Privacy = () => {
  return (
    <PrivacyLink>
      <p>Al continuar, aceptas nuestra</p>
      <TextLink href="https://cabify.com/es/drivers-privacy-country-selector">
        Política de privacidad
      </TextLink>
    </PrivacyLink>
  );
};

export default Privacy;
