import React from "react";
import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "components/Navbar/navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="vstech-nav-content">
          <h1>vsTech Movies Review</h1>
          <a
            href="https://github.com/viniciusSg22"
            target="_blank"
            rel="noreferrer"
          >
            <div className="vstech-contact-container">
              <GithubIcon />
              <p className="vstech-contact-link">Vinícius Sanches Geniselli</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
