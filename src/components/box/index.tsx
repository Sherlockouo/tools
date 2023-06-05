import React, { Component } from 'react';
import style from './style.module.scss';

type Props = {
  children?: React.ReactNode;
};
export default class Box extends Component<Props> {
  render() {
    return <div className={style.box}>{this.props.children}</div>;
  }
}
