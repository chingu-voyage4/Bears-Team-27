import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#">
          Inventoree
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
