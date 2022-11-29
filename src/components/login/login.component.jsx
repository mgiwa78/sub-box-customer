import React from "react";
import Forminput from "../formfield/forminput.component";
import { LoginContainer } from "./login.style";
const Login = () => {
  return (
    <LoginContainer>
      <Forminput placeholder={"Email "} type="email" />
      <Forminput placeholder={"Password"} type="password" />
      <div className="login-btn">Login</div>
    </LoginContainer>
  );
};

export default Login;
