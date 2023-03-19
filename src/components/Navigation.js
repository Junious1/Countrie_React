import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink to="/About"  className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
