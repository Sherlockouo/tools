import React, { Component, Suspense } from 'react';
// import { useRoutes } from 'react-router';
// import routes from '@/router';
import style from './style.module.scss';
type Props = {
  children?: React.ReactNode;
  icon: string;
  name: string;
  desc: string;
};
export default class Item extends Component<Props> {
  render() {
    return (
      <div className={style.item}>
        <div className="item-info">
          <div className="item-icon"> </div>
          <div className="item-name">{this.props.name} </div>
          <div className="item-desc"> {this.props.desc} </div>
        </div>
      </div>
    );
  }
}
