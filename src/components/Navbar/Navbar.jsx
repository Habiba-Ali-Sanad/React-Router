import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2 fixed-top blue">
        <div className="container-fluid d-flex justify-content-between align-items-center  mx-5 my-3">
          <h1 className="  m-0 fa-bold">
            <Link className="text-decoration-none text-white " to="">
              Start Framework
            </Link>
          </h1>

          {/* Navbar Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-decoration-none text-white fs-5 fw-bold px-3 py-2 rounded d-flex justify-content-center align-items-center ${
                      isActive ? "active-link" : ""
                    }`
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `text-decoration-none text-white fs-5 fw-bold px-3 py-2 rounded d-flex justify-content-center align-items-center ${
                      isActive ? "active-link" : ""
                    }`
                  }
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `text-decoration-none text-white fs-5 fw-bold px-3 py-2 rounded d-flex justify-content-center align-items-center ${
                      isActive ? "active-link" : ""
                    }`
                  }
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
