import styled from "styled-components";

export const PhoneField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  height: 44px;
  margin-bottom: 15px;
  background-color: #fafafe;
  font-size: 14px;
  font-family: helvetica;
  &:focus-within {
    border: 1px solid #6f36ff;
  }
`;

export const CountrySelector = styled.img`
  display: flex;
  width: 20px;
  padding: 15px;
`;

export const Telephone = styled.div`
  display: flex;
  width: 100%;
`;
export const InputPhone = styled.input`
  border: none;
  width: 100%;
  height: 44px;
  border-left: 1px solid#e4e3e6;
  font-family: helvetica;
  font-weight: lighter;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  padding-left: 10px;
`;
