import React from 'react';
import style from './style.module.scss';

type Props = {
  icon: string;
  className: string;
  children?: React.ReactNode;
};

class IconComponent extends React.Component<Props> {
  render() {
    return (
      <svg
        className={`${style.icon} ${this.props.className}`}
        aria-hidden="true"
      >
        <use xlinkHref={this.props.icon}></use>
      </svg>
    );
  }
}

export default IconComponent;
