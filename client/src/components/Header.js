import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let navItems = (
      <li key="login" className="nav-item">
        <a className="nav-link" onClick={this.props.login}>
          Login
        </a>
      </li>
    );

    if (this.props.isAuthenticated) {
      navItems = [
        <li key="dashboard" className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>,
        <li key="signout" className="nav-item">
          <a className="nav-link" onClick={this.props.login}>
            Signout
          </a>
        </li>
      ];
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#">
          Inventoree
        </a>
        <ul className="navbar-nav">
          {/* 
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login with Google
            </a>
          </li>
          */}
          {navItems}
        </ul>
      </nav>
    );
  }
}

export default Header;
