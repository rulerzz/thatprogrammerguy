import React from "react";
import propTypes from "prop-types";

export default function Header(props) {
  return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.brand}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link active anchor" aria-current="page" href="#panel-1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link anchor" aria-current="page" href="#panel-2">
                  Tech Stack
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link anchor" href="#panel-3">
                  Works
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle anchor"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Applications
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#panel-4">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#panel-5">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#panel-6">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link anchor" href="#panel-5">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link anchor" href="#panel-6">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

Header.propTypes = {
  brand : propTypes.string
};

Header.defaultProps = {
  brand : "That Programmer Guy"
};