import React from "react";
import { HeaderContainer, SearchIcon } from "./header.style";
import searchPath from "../../assets/icon/search.svg";
import { useNavigate } from "react-router";
const Header = () => {
  const Navigate = useNavigate();
  return (
    <HeaderContainer>
      <div onClick={() => Navigate("/")} className="logo">
        SubBOX
      </div>
      <div className="search-box">
        <SearchIcon src={searchPath} className="search-icon"></SearchIcon>
        <input className="search" placeholder="Search for vendor and product" />
      </div>
      <div className="nav-links">
        <ul className="links">
          <li onClick={() => Navigate("/")}>Home</li>
          <li>Subscription</li>
          <li>Cart</li>
          <li>Check-Out</li>
        </ul>
        <ul className="auth-links">
          <li onClick={() => Navigate("/auth")}>Login</li>
          <li onClick={() => Navigate("/auth/signup")}>Sign up</li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
