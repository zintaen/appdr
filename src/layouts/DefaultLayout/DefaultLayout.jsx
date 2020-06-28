import React from 'react';
import { Layout } from 'antd';

import { Wrapper, Main } from './DefaultLayout.styled';
import SideBar from '../SideBar';
import NavBar from '../NavBar';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper hasSider>
      <SideBar />
      <Layout>
        <NavBar />
        <Main>{children}</Main>
      </Layout>
    </Wrapper>
  );
};

export default DefaultLayout;
