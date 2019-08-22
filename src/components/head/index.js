import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";


export function Head() {
  return (
    <header>
      <nav className="top-nav">
        <Link className="nav-brand" to="/">
          <img src="https://www.alchemative.com/wp-content/uploads/2016/11/logo-with-animation.svg" alt="logo" className="top-nav-logo" />
        </Link>
        <ul className="top-nav-item">
          <li className="top-nav-item-list link hover">
            <Link to="/about" className="link">
              About US
            </Link>
          </li>
          <li class="top-nav-item-list link hover">
            <Link to="/contact" className="link">
              Contact US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
