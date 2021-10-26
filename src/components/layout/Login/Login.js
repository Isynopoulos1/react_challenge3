import React from "react";

//IMPORT STYLE
import { LoginMain, LoginWrapper, LoginCta, LoginForm } from "./Login.styles";
//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";
import Input from "../../elements/Input/Input";

const Login = () => {
  const inputs = [
    { placeholder: "Nombre", type: "name" },
    { placeholder: "Apellido", type: "surname" }
  ];
  return (
    <LoginMain>
      <LoginWrapper>
        <Logo />
        <LoginCta>
          <p>Regístrate para obtener una cuenta de conductor</p>
        </LoginCta>
        <LoginForm>
          {inputs.map((input, i) => (
            <Input key={i} placeholder={input.placeholder} type={input.type} />
          ))}
        </LoginForm>
      </LoginWrapper>
    </LoginMain>
  );
};

export default Login;
