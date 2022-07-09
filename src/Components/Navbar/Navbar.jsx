import React from "react";
import "./Navbar.css";
import Logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex space-between">
      <img src={Logo} alt="Logo" />
      <div className="line" />
      <div className="nav-links">
        <ul className="flex space-around">
          <li className="nav-link flex active">
            <span>00</span> <p>HOME</p>
          </li>
          <li className="nav-link flex">
            <span>01</span> <p>DESTINATION</p>
          </li>
          <li className="nav-link flex">
            <span>02</span> <p>CREW</p>
          </li>
          <li className="nav-link flex">
            <span>03</span> <p>TECHNOLOGY</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
