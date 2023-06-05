import React, { Component } from 'react';
import style from './style.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className="copyright">
          <p>&copy; 2023 DevTools. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
