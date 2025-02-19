import React, { useState } from "react";
import Home from "../../../assets/sidenav1.svg";
import LeftArrow from "../../../assets/svg/LeftArrow";
import RightArrow from "../../../assets/svg/RightArrow";
import { NavLink } from "react-router-dom";
import "../../../styles/Navbar.scss";

const Navbar = ({ toggleNav, collapseNav }) => {
  return (
    <>
      <nav className="navbar-container">
        <NavLink
          to="/dashboard"
          activeClassName="active"
          className="navbar-items"
        >
          <img className="item-icon" src={Home} alt="home-icon" />
          <span className="item-text">Dashboard</span>
        </NavLink>
      </nav>
      <div className="collapse-container">
        <button className="circular-icon-button" onClick={toggleNav}>
          {collapseNav ? <RightArrow /> : <LeftArrow />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
