import React from "react";

//IMPORT STYLE
import {
  RegisterMain,
  RegisterWrapper,
  RegisterCta,
  RegisterForm,
  InputWrapper,
  CountrySelector,
  PhoneField,
  InviteCta,
  Option,
  LoginLink
} from "./Register.styles";
//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";
import Input from "../../elements/Input/Input";

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
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
          </InputWrapper>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Contraseña" type="password" />
          <PhoneField>
            <CountrySelector
              src="https://ik.imagekit.io/ppayaz/ppayaz-website/flag_fQzludPB8.png?updatedAt=1634221524609"
              alt="flag"
            />
            <Input placeholder="Número de celular" type="tel" />
          </PhoneField>
          <Input placeholder="Ciudad" type="country" />
          <InviteCta>
            ¿Tienes un código de invitación?
            <Option>(Optional)</Option>
          </InviteCta>
          <Input placeholder="Escribe el código" type="text" />
          <InviteCta>
            Al continuar, aceptas nuestra
            <LoginLink href="https://www.paypal.com/authflow/password-recovery/?country.x=ES&locale.x=es_ES&redirectUri=%252Fsignin%252F">
              Política de privacidad
            </LoginLink>
          </InviteCta>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterMain>
  );
};

export default Register;
