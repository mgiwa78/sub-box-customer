import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const AuthContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  height: 100vh;
  .auth-logo {
    cursor: pointer;
    background-color: #fff;
    display: flex;
    width: 100vw;
    position: fixed;
    top: 0;
    justify-content: space-around;
    height: 90px;
    align-items: center;
    border-bottom: 1px solid rgb(207, 207, 207);

    font-weight: 600;
    font-size: 30px;
    height: 90px;
  }
  .auth-body {
    padding: 10px;
    border: 1px solid #e5e7ea;
    background-color: #fff;

    width: 380px;
    .auth-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        cursor: pointer;
        padding: 14px;
        color: #000;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        list-style: none;
        width: 42%;
        ${({ state }) =>
          state === "login"
            ? css`
                & {
                  border-bottom: 2px solid #e5e7ea;
                }
                &:last-child {
                  border-bottom: 2px solid #000;
                }
              `
            : state === "signup"
            ? css`
                & {
                  border-bottom: 2px solid #e5e7ea;
                }
                &:first-child {
                  border-bottom: 2px solid #000;
                }
              `
            : ""}
      }
    }
  }
`;
