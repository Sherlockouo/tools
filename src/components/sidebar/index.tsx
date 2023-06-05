import React, { Component, useState } from 'react';
import style from './style.module.scss';
import { MenuUnfoldOutlined, SettingTwoTone } from '@ant-design/icons';
import { Drawer, FloatButton, SiderProps, Space, Popover } from 'antd';

function SideBar() {
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
          <Popover placement="right" content="打开菜单">
            <MenuUnfoldOutlined onClick={showDrawer}></MenuUnfoldOutlined>
          </Popover>
        </Space>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
        >
          <p>sao</p>
          <p>sao</p>
          <p>sao</p>
          <p>sao</p>
        </Drawer>
      </div>
      <div className="back2Top">
        <Space>
          <FloatButton.BackTop visibilityHeight={0} />
        </Space>
      </div>
    </div>
  );
}

export default SideBar;
