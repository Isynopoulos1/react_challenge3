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

export const RegisterCta = styled.p`
  text-align: center;
  font-family: helvetica;
  margin-top: 40px;
  color: #2e2545;
  font-size: 16px;
  margin-bottom: 25px;
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
export const PhoneField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid #e4e3e6;
  border-right: none;
  border-radius: 4px;
  height: 44px;
  margin-bottom: 15px;
  background-color: #fafafe;
`;
export const Country = styled.div`
  margin-bottom: 15px;
`;
export const CountrySelector = styled.img`
  display: flex;
  width: 20px;
  padding: 15px;
`;
export const Telephone = styled.div`
  background-color: white;
  width: 100%;
  border: none;
`;

export const InviteCta = styled.p`
  display: flex;
  text-align: left;
  font-family: helvetica;
  font-size: 14px;
  color: #616a8f;
  margin-bottom: 10px;
`;
export const Option = styled.div`
  margin-left: 3px;
  color: #979fbd;
`;
export const LoginLink = styled.a`
  margin-left: 3px;
  color: #6f36ff;
  text-decoration: none;
  margin-bottom: 10px;
`;
export const GiftCode = styled.div`
  margin-bottom: 15px;
`;
