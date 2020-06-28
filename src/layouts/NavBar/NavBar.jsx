import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { Wapper, RightBlock } from './NavBar.styled';

const UserAction = () => {
  return (
    <Menu>
      <Menu.Item key="drop-menu-0">Profile</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="drop-menu-1">My School</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="drop-menu-2">Logout</Menu.Item>
    </Menu>
  );
};

const NavBar = () => (
  <Wapper>
    <RightBlock>
      <Dropdown overlay={<UserAction />} trigger={['click']}>
        <Avatar size={48} src="https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-12.jpg" />
      </Dropdown>
    </RightBlock>
  </Wapper>
);

export default NavBar;
