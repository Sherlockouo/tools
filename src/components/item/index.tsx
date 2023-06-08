import React, { Component, Suspense } from 'react';
// import { useRoutes } from 'react-router';
// import routes from '@/router';
import style from './style.module.scss';
import IconComponent from '../iconConponent/indext';
type Props = {
  children?: React.ReactNode;
  className?: string;
  icon: string;
  name: string;
  desc: string;
};
export default class Item extends Component<Props> {
  render() {
    return (
      <div className={style.item + ' ' + this.props.className}>
        <div className="item-info">
          <div className="basic-item-info">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
