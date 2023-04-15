import React from "react";
import "./style.css";
import Dropdown from "../Dropdown/Template_01";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <a class="navbar-brand" href="/">
            <img src="https://malaebapp.com/images/logo.png" alt=""></img>
          </a>
          <Dropdown />
        </div>
        <div className="header-navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Offers</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="header-lang">
          <div>
            <a>For Stadiums Owners</a>
          </div>
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
