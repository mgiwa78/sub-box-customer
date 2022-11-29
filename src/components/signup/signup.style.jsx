import styled from "styled-components/macro";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: max-content;
  padding: 20px 0;
  align-items: center;
  gap: 15px;
  border-radius: 2px;
  width: 100%;
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #000;
    border-radius: 3px;
    width: 100%;
    height: 50px;
  }
`;
