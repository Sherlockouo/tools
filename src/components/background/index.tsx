import React, { Component } from 'react';
import style from './style.module.scss';

export default class BackGround extends Component {
  render() {
    return (
      <div className={style.bg}>
        <div className={style.bgImage}>
          <img src={require('@/assets/img/bg.png')} alt="" />
        </div>
      </div>
    );
  }
}
