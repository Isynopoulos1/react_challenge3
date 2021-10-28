import React from "react";

//IMPORT STYLE
import {
  RegisterMain,
  RegisterWrapper,
  RegisterCta,
  RegisterForm,
  InputWrapper
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
        </RegisterForm>
      </RegisterWrapper>
    </RegisterMain>
  );
};

export default Register;
