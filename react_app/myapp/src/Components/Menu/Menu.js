// Menu.js

import "./menu.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import React from "react";

function Menu() {
  return (
    <div className="menu-container">
      <div className="left-side">
        <img className="logo" src={logo} alt="LogoSite" />
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/news">Новости</Link>
        </li>
        <li className="menu-item">
          <Link to="/findbin">Поиск по БИН</Link>
        </li>
        <li className="menu-item">
          <Link to="/population">Численность населения</Link>
        </li>
        <li className="menu-item">
          <Link to="/unemployed-pop">Безработное население</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
