import React, { Component, useState } from 'react';
import style from './style.module.scss';
import { MenuUnfoldOutlined, SettingTwoTone } from '@ant-design/icons';
import { Drawer, FloatButton, SiderProps, Space, Popover } from 'antd';
import IconComponent from '@/components/iconConponent';
import Menu from '@/components/menu';

function SideBar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [showTheme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!showTheme);
  };
  const head = () => {
    return (
      <div className="headMenu">
        <div className="theme" onClick={changeTheme}>
          shit
          <IconComponent className="theme" icon="#icon-richu" />
        </div>
      </div>
    );
  };
  return (
    <div className={style.sideBar}>
      <div className="setting">
        <Space onClick={showDrawer}>
          <Popover placement="right" content="打开菜单">
            <IconComponent className="icon" icon="#icon-lvyoudongtai" />
          </Popover>
        </Space>
        <Drawer
          title="Title"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          extra={head()}
        >
          <Menu />
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
