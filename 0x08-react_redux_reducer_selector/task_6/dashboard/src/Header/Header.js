import React from 'react';
import './Header.css';
import holbertonLogo from '../images/holberton-logo.png';

function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </header>
        </div>
    )
}

export default Header;