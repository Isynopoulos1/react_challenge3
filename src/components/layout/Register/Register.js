import React from "react";

//IMPORT STYLE
import {
  RegisterMain,
  RegisterWrapper,
  RegisterForm,
  EmailSection,
  PasswordSection,
  Country,
  GiftCode
} from "./Register.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import Phone from "../../elements/Phone/Phone";
import Name from "../../elements/Name/Name";
import Intro from "../../elements/Intro/Intro";
import InviteCode from "../../elements/InviteCode/InviteCode";
import Privacy from "../../elements/Privacy/Privacy";

const Register = () => {
  return (
    <RegisterMain>
      <RegisterWrapper>
        <Logo />
        <Intro />
        <RegisterForm>
          <Name type="text" icon="person" />
          <EmailSection>
            <Input placeholder="Email" type="email" icon="mail_outline" />
          </EmailSection>
          <PasswordSection>
            <Input placeholder="Contraseña" type="password" icon="lock" />
          </PasswordSection>
          <Phone />
          <Country>
            <Input placeholder="Ciudad" type="country" />
          </Country>
          <InviteCode />
          <GiftCode>
            <Input placeholder="Escribe el código" type="text" icon="people" />
          </GiftCode>
          <Privacy />
          <Button label="Registrarse" />
        </RegisterForm>
      </RegisterWrapper>
    </RegisterMain>
  );
};

export default Register;
