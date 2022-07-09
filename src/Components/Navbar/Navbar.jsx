import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/shared/logo.svg";

const Navbar = ({ setPageIndex }) => {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <nav className="flex space-between">
      <img src={Logo} alt="Logo" />
      <div className="line" />
      <div className="nav-links">
        <ul className="flex space-around">
          <li
            className={`nav-link flex main ${activeTab}`}
            onClick={() => {
              setPageIndex(0);
              setActiveTab("main-active");
            }}
          >
            <span>00</span> <p>HOME</p>
          </li>
          <li
            className={`nav-link flex destination ${activeTab}`}
            onClick={() => {
              setPageIndex(1);
              setActiveTab("destination-active");
            }}
          >
            <span>01</span> <p>DESTINATION</p>
          </li>
          <li
            className={`nav-link flex crew ${activeTab}`}
            onClick={() => {
              setPageIndex(2);
              setActiveTab("crew-active");
            }}
          >
            <span>02</span> <p>CREW</p>
          </li>
          <li
            className={`nav-link flex technology ${activeTab}`}
            onClick={() => {
              setPageIndex(3);
              setActiveTab("technology-active");
            }}
          >
            <span>03</span> <p>TECHNOLOGY</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
