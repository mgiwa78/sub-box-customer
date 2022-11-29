import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import CategoryMenu from "../../components/category-menu/category-menu.component";
import Header from "../../components/header/header.component";
import ItemRow from "../../components/item-row/item-row.component";
import { AuthContainer, AuthLink } from "./auth.styles";

const Auth = () => {
  const Navigate = useNavigate();
  const handleChange = (path) => {
    Navigate(path);
    if (path === "/auth/signup") {
      setpage("signup");
    }
    if (path === "/auth") {
      setpage("login");
    }
  };
  const [page, setpage] = useState("login");
  return (
    <AuthContainer state={page}>
      <div onClick={() => Navigate("/")} className="auth-logo">
        SubBox
      </div>

      <div className="auth-body">
        <div className="auth-nav">
          <li className="signup" onClick={() => handleChange("/auth/signup")}>
            Sign Up
          </li>
          <li className="login" onClick={() => handleChange("/auth")}>
            Login
          </li>
        </div>
        <Outlet />
      </div>
    </AuthContainer>
  );
};

export default Auth;
