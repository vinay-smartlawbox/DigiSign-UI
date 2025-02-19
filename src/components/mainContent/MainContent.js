import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Navbar from "../common/navbar/Navbar";
import UserManagement from "../userManagement/UserManagement";

const MainContent = () => {
  const [collapseNav, setCollapseNav] = useState(false);
  const toggleNav = () => {
    setCollapseNav(!collapseNav);
  };
  return (
    <>
      <main>
        <Header />
        <div
          className={`main-content ${
            collapseNav ? "main-content-collapsed" : "main-content-expanded"
          }`}
        >
          <Navbar collapseNav={collapseNav} toggleNav={toggleNav} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<UserManagement />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
