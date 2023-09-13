import React from "react";
import Logo from "../../assets/images/logo.svg";

const navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple Logo" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
