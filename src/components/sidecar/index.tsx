import React, { Component } from 'react';
import style from './style.module.scss';

export default class SideCar extends Component {
  render() {
    return (
      <nav className={style.sideCar}>
        <p className="copy">&copy; 2023 DevTools. All rights reserved.</p>
      </nav>
    );
  }
}
