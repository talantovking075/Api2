import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Multi<span>API</span></h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Asosiy
          </NavLink>
        </li>
        <li>
          <NavLink to="/kino" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Kino
          </NavLink>
        </li>
        <li>
          <NavLink to="/cloud" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cloud
          </NavLink>
        </li>
        <li>
          <NavLink to="/fortnite" className={({ isActive }) => (isActive ? 'active' : '')}>
            Fortnite
          </NavLink>
        </li>
        <li>
          <NavLink to="/uzum" className={({ isActive }) => (isActive ? 'active' : '')}>
            Uzum
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Learn More
          </NavLink>
        </li>
      </ul>
      <div className="nav-status">
        <span className="dot"></span> Online
      </div>
    </nav>
  );
};

export default Navbar;