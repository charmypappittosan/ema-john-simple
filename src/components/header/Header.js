import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
      <nav className="navigation-logo">
        <div className="nav-image">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav-list">
          <a href="/shop">Shop</a>
          <a href="/orders">Orders</a>
          <a href="/inventiry">Inventory</a>
          <a href="/about">About</a>
        </div>
      
      </nav>
    );
};

export default Header;