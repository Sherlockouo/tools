import React, { Component } from 'react';
import style from './style.module.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
