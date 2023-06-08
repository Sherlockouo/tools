import React, { Component, Suspense } from 'react';
// import { useRoutes } from 'react-router';
// import routes from '@/router';
import style from './style.module.scss';
type Props = {
  className?: string;
  children?: React.ReactNode;
};
export default class Container extends Component<Props> {
  render() {
    return (
      <div className={style.container + ' ' + this.props.className}>
        {this.props.children}{' '}
      </div>
    );
  }
}
