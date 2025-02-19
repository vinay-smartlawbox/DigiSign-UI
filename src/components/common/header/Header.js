import React from "react";
import logo from "../../../assets/logo.png";
import Search from "./Search";
import DigiSign from "../../../assets/svg/DigiSign";
import Menu from "./Menu";
import "../../../styles/Header.scss";

const Header = ({ hasShowSettings }) => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo-container">
          {/* <img src={logo} alt="Logo" className="header-logo" /> */}
          <DigiSign width="125" height="48"/>
        </div>
        {/* <Search /> */}
        <div className="menu">
          <Menu />
        </div>
      </div>
    </>
  );
};
export default Header;
