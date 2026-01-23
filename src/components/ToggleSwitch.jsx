import React, { useContext } from "react";
import "./toggle.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeSwitcher";

const ToggleSwitch = () => {
  // const { isOn, ThemeToggle } = useContext(ThemeContext);
  const { isOn, ThemeToggle, theme } = useContext(ThemeContext);
console.log("Theme:", theme);


  const bgColor = { background: isOn ? "#4CAF50" : "#686666" };

  return (
    <div className="toggleSwich" onClick={ThemeToggle} style={bgColor}>
      <div className={`circle ${isOn ? "on" : "off"}`}>
        {isOn ? (
          <FaSun className="icon sun" />
        ) : (
          <FaMoon className="icon moon" />
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
