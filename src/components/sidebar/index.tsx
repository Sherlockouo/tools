import React, { Component, useState } from 'react';
import style from './style.module.scss';
import { SettingTwoTone } from '@ant-design/icons';
import { Drawer, FloatButton, Space } from 'antd';

export default class SideBar extends Component {
  render() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return (
      <div className={style.sideBar}>
        <div className="setting">
          <Space>
            <SettingTwoTone onClick={showDrawer} />
          </Space>
          <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            // key={placement}
          ></Drawer>
        </div>
        <div className="back2Top">
          <Space>
            <FloatButton.BackTop visibilityHeight={0} />
          </Space>
        </div>
      </div>
    );
  }
}
