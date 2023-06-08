import React from 'react';

type Props = {
  icon: string;
  className: string;
  children?: React.ReactNode;
};

class IconComponent extends React.Component<Props> {
  render() {
    return (
      <svg className={`icon ${this.props.className}`} aria-hidden="true">
        <use xlinkHref={this.props.icon}></use>
      </svg>
    );
  }
}

export default IconComponent;
