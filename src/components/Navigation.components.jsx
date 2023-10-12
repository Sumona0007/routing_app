import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navigation extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GitHub
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/username">
                  Username
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/issues">
                   Issues
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/marketplace">
                  MarketPlace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facebook">
                  Facebook
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
