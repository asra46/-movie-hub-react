import React, { useContext } from "react";
import "./component.css";
import ToggleSwitch from "./ToggleSwitch";
import { ThemeContext } from "../context/ThemeSwitcher";

const Header = ({ setCategory }) => {
  const { theme } = useContext(ThemeContext); // 👈 force re-render

  return (
    <div className={`navbar ${theme}`}>
      <h1 className="logo">Movie Hub</h1>

      <ul className="navbar-items">
        <li className="nav-item">
          <ToggleSwitch />
        </li>
        <li className="nav-item" onClick={() => setCategory("popular")}>
          Popular 🔥
        </li>
        <li className="nav-item" onClick={() => setCategory("top_rated")}>
          Top Rated ⭐
        </li>
        <li className="nav-item" onClick={() => setCategory("upcoming")}>
          Upcoming 🎬
        </li>
      </ul>
    </div>
  );
};

export default Header;
