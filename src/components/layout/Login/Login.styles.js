import styled from "styled-components";

export const LoginMain = styled.main`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 72px;
  background-color: #fafafe;
`;

export const LoginWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoginCta = styled.p`
  text-align: center;
  font-family: helvetica;
  margin-top: 40px;
  color: #2e2545;
  font-size: 16px;
  margin-bottom: 25px;
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 551px;
  border: 1px solid #e4e3e6;
  border-radius: 4px;
  background-color: white;
`;
