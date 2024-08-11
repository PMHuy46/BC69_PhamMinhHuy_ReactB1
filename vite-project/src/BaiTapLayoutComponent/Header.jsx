import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="navbar navbar-expand-lg container text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link text-white" href="#">
                Abouts
              </a>
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
