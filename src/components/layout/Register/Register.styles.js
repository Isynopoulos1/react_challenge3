import styled from "styled-components";

export const RegisterMain = styled.main`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #fafafe;
`;

export const RegisterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//FORM SECTION
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  padding: 25px;
  max-width: 325px;
  width: 100%;
  height: 500px;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  background-color: white;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const EmailSection = styled.div`
  margin-bottom: 15px;
`;

export const PasswordSection = styled.div`
  margin-bottom: 15px;
`;

export const Country = styled.div`
  margin-bottom: 15px;
`;

export const GiftCode = styled.div`
  margin-bottom: 15px;
`;
