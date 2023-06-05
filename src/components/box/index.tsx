import React, { Component } from 'react';
import style from './style.module.scss';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { Space } from 'antd';

type Props = {
  title: string;
  children?: React.ReactNode;
};
export default class Box extends Component<Props> {
  render() {
    return (
      <div className={style.box}>
        <div className="box-title">
          <Space>
            <HomeOutlined />
          </Space>
          <span>{this.props.title}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}
