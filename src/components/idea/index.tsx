import React, { Component } from 'react';
import style from './style.module.scss';

type Props = {
  children?: React.ReactNode;
};

export default class Idea extends Component<Props> {
  render() {
    return <div className={style.idea}>{this.props.children}</div>;
  }
}
