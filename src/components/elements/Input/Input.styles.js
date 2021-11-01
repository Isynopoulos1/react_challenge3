import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;

export const InputStyle = styled.input`
  height: 44px;
  border: none;
  font-size: 14px;
  font-family: helvetica;
  font-weight: lighter;
  &:focus {
    outline: none;
  }
`;

export const IconStyle = styled.span`
  font-family: "Material Icons";
  font-size: 20px;
  color: #e4e3e6;
  margin-right: 3px;
  margin-left: 10px;
`;
