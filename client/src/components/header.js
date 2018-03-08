import React, { Component } from 'react';

export class Header extends Component {
  render () {
    return (
      <header>
        <div className='header-inner'>
          <div className='logo'>INVENTOREE</div>
          <nav>
            <ul>
              <li><a className='nav-link' href=''>Dashboard</a></li>
              <li><a className='nav-link' href=''>Signout</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
