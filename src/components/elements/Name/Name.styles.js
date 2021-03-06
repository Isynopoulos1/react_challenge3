import styled from "styled-components";

export const NameField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 44px;
  margin-bottom: 15px;
`;

export const NameWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  border: 1px solid #e4e3e6;
  border-radius: 4px 0px 0px 4px;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;

export const InputName = styled.input`
  display: flex;
  width: 100%;
  border: none;
  border-radius: 4px 0px 0px 4px;
  font-family: helvetica;
  font-weight: lighter;
  font-size: 14px;
  &:focus {
    color: none;
    outline: none;
  }
  padding-left: 10px;
`;

export const UserIcon = styled.img`
  width: 10px;
`;

export const LastName = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  border: 1px solid #e4e3e6;
  border-radius: 0px 4px 4px 0px;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;

export const InputLast = styled.input`
  border: none;
  border-radius: 0px 4px 4px 0px;
  font-family: helvetica;
  font-weight: lighter;
  font-size: 14px;
  &:focus {
    color: none;
    outline: none;
  }
  padding-left: 10px;
`;

export const IconStyle = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: "Material Icons";
  color: #e4e3e6;
  margin-right: 3px;
  margin-left: 10px;
`;
