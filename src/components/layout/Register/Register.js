import React from "react";

//IMPORT STYLE
import {
  RegisterMain,
  RegisterWrapper,
  RegisterCta,
  RegisterForm,
  InputWrapper,
  EmailSection,
  PasswordSection,
  Country,
  InviteCta,
  GiftCode,
  Option,
  LoginLink
} from "./Register.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import Phone from "../../elements/Phone/Phone";

const Register = () => {
  return (
    <RegisterMain>
      <RegisterWrapper>
        <Logo />
        <RegisterCta>
          Regístrate para obtener una cuenta de conductor
        </RegisterCta>
        <RegisterForm>
          <InputWrapper>
            <Input placeholder="Nombre" type="text" icon="person" />
            <Input placeholder="Apellido" />
          </InputWrapper>
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
          <InviteCta>
            ¿Tienes un código de invitación?
            <Option>(Optional)</Option>
          </InviteCta>
          <GiftCode>
            <Input placeholder="Escribe el código" type="text" icon="people" />
          </GiftCode>
          <InviteCta>
            Al continuar, aceptas nuestra
            <LoginLink href="https://www.paypal.com/authflow/password-recovery/?country.x=ES&locale.x=es_ES&redirectUri=%252Fsignin%252F">
              Política de privacidad
            </LoginLink>
          </InviteCta>
          <Button label="Registrarse" />
        </RegisterForm>
      </RegisterWrapper>
    </RegisterMain>
  );
};

export default Register;
