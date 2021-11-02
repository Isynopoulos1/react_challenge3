import React from "react";

//IMPORT STYLES
import { Invite, Opcional } from "./InviteCode.styles";

const InviteCode = () => {
  return (
    <Invite>
      <h1>¿Tienes un código de invitación?</h1>
      <Opcional>
        <p>(Opcional)</p>
      </Opcional>
    </Invite>
  );
};
export default InviteCode;
