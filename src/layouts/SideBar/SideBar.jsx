import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
  LinkComponent,
  Image,
  MenuWrapper,
  MenuItem,
  UserWrapper,
  UserAvatar,
  UserName,
  Button,
} from './SideBar.styled';
import logo from 'assets/images/logo.png';
import { menus } from '../menus';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <Sider width={240} style={{ backgroundColor: '#313131', color: 'white' }}>
      <LinkComponent to="/home">
        <Image src={logo} alt="Logo" title="Logo" />
      </LinkComponent>
      <UserWrapper align="center" justify="center">
        <Space>
          <UserAvatar size={48} icon={<UserOutlined />} />
          <UserName>홍길동님</UserName>
        </Space>
      </UserWrapper>
      <div style={{ margin: 16 }}>
        <Button>
          HTML 퍼블리싱 <br />
          빠른 견적 시스템
        </Button>
      </div>

      <MenuWrapper mode="inline" defaultSelectedKeys={['dashboard']} selectedKeys={[path]}>
        {menus.map((item) => (
          <MenuItem key={item.key} icon={<item.Icon style={{ fontSize: 20 }} />}>
            <Link to={item.link}>{item.title}</Link>
          </MenuItem>
        ))}
      </MenuWrapper>
    </Sider>
  );
};

export default Sidebar;
