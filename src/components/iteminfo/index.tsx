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
  href: string;
};
export default class ItemInfo extends Component<Props> {
  render() {
    return (
      <div className={style.item + ' ' + this.props.className}>
        <a href={this.props.href} className="tools-card">
          <div className="item-icon">
            <IconComponent icon={this.props.icon} className="icon" />
          </div>
          <div className="tools-card-text">
            <div className="tools-card-name">{this.props.name} </div>
            <div className="tools-card-desc"> {this.props.desc} </div>
          </div>
        </a>
      </div>
    );
  }
}
