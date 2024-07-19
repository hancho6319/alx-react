// Footer.js
import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import './Footer.css';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="Footer">
      <p>© 2022 - School dashboard</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;

