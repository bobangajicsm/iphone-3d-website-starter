import React from "react";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import Basket from "../../assets/images/store.svg";
import { navbarValue } from "../../constants";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple Logo" />
          </li>

          {navbarValue.map((nav) => {
            return (
              <li>
                <a className="link-styled" key={nav.id}>
                  {nav.name}
                </a>
              </li>
            );
          })}

          <li>
            <img src={Search} alt="Search Icon" />
          </li>
          <li>
            <img src={Basket} alt="Basket Icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
