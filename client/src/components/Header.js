import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header = (props) => {

  let navItems = (
    <li key="login" className="nav-item">
      <a className="nav-link" onClick={props.login}>
        Login
      </a>
    </li>
  );

  if (props.isAuthenticated) {
    navItems = [
      <li key="dashboard" className="nav-item">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>,
      <li key="signout" className="nav-item">
        <a className="nav-link" onClick={props.signout}>
          Signout
        </a>
      </li>
    ];
  }

  return (
    <nav className="navbar navbar-expand-lg justify-content-between header">
      <a className="navbar-brand" href="/">
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
};

export default Header;
