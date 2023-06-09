import React, { Component } from 'react';
import style from './style.module.scss';
import { List, Typography } from 'antd';

type Props = {
  children?: React.ReactNode;
};

export default class Menu extends Component<Props> {
  render() {
    const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ];
    return (
      <div className={style.menu}>
        <ul>
          <li>
            <div> 菜单一</div>
          </li>
          <li>
            <div> 菜单2</div>
          </li>
          <li>
            <div> 菜单3</div>
          </li>
        </ul>
      </div>
    );
  }
}
