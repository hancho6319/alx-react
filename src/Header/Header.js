import React from 'react';
import './Header.css';
import holbertonLogo from '../holberton-logo.png';

function Header() {
  return (
    <header className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
