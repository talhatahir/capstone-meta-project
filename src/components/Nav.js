import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-brand">
          <Link to="/">
            <img src={require('../assets/images/Logo.png')} alt="Little Lemon logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/reservations">RESERVATIONS</Link></li>
          <li><Link to="/order-online">ORDER ONLINE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav; 