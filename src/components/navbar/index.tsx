import React, { Component } from 'react';
import style from './style.module.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <a href="/" className="navlink">
          <div className="nav-home">Home</div>
        </a>
        <a href="/tools" className="navtools">
          <div className="nav-tools">Tools</div>
        </a>
        <a href="/about" className="navabout">
          <div className="nav-about">About</div>
        </a>
      </nav>
    );
  }
}
