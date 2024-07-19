// Header.js
import React, { Component } from 'react';
import { AppContext } from '../App/AppContext';
import './Header.css';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <div className="Header">
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        )}
      </div>
    );
  }
}

export default Header;

