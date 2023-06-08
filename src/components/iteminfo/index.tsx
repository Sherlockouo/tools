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
        <div className="item-info">
          <div className="basic-item-info">
            <a href={this.props.href}>
              <div className="item-icon">
                <IconComponent icon={this.props.icon} className="icon" />
              </div>
              <div className="">
                <div className="item-name">{this.props.name} </div>
                <div className="item-desc"> {this.props.desc} </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
