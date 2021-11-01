import styled from "styled-components";

export const NameField = styled.div`
  display: flex;
  margin-bottom: 14px;
`;
export const InputName = styled.input`
  border: none;
  height: 44px;
  font-family: helvetica;
  font-weight: lighter;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  padding-left: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;
export const LastName = styled.div`
  display: flex;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;
