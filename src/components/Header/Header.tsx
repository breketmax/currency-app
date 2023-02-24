import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/bm.png';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="page-header container">
      <div className="logo-wrapper">
        <img src={logo} alt="breketmax-logo" />
      </div>
      <NavLink to="/">Convert currency</NavLink>
      <NavLink to="currency-rate">Currency rate</NavLink>
    </div>
  );
};

export default Header;
