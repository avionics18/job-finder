import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand font-weight-bold" to="/">
            <i className="fa fa-wpexplorer text-primary" /> Job Finder
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main-menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career">
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
