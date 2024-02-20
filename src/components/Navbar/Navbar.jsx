import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [pathname, setPathName] = useState(window.location.pathname);
  console.log(window.location.pathname);
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white" href="#">
            START FRAMEWORK
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/");
                  }}
                  className={
                    pathname === "/"
                      ? "active nav-link fw-bold text-white"
                      : "nav-link fw-bold text-white"
                  }
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/about");
                  }}
                  className={
                    pathname === "/about"
                      ? "active nav-link fw-bold text-white"
                      : "nav-link fw-bold text-white"
                  }
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/portfolio");
                  }}
                  className={
                    pathname === "/portfolio"
                      ? "active nav-link fw-bold text-white"
                      : "nav-link fw-bold text-white"
                  }
                  to={"/portfolio"}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/contact");
                  }}
                  className={
                    pathname === "/contact"
                      ? "active nav-link fw-bold text-white"
                      : "nav-link fw-bold text-white"
                  }
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
