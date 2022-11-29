import React from "react";
import Forminput from "../formfield/forminput.component";
import { SignupContainer } from "./signup.style";
const Signup = () => {
  return (
    <SignupContainer>
      <Forminput placeholder={"First Name "} type="text" />
      <Forminput placeholder={"Last Name"} type="text" />
      <Forminput placeholder={"Email Address"} type="email" />
      <Forminput placeholder={"Password"} type="password" />
      <div className="login-btn">Login</div>
    </SignupContainer>
  );
};

export default Signup;
