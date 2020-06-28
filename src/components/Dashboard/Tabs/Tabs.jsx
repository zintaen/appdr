import React from 'react';
import { Col } from 'antd';
import { TabWrapper, TabPanel } from './Tabs.styled';

export const Tabs = () => (
  <TabWrapper gutter={16}>
    <Col span={8}>
      <TabPanel active>시간제 쿠폰 서비스</TabPanel>
    </Col>
    <Col span={8}>
      <TabPanel>월 후불제</TabPanel>
    </Col>
    <Col span={8}>
      <TabPanel>프로젝트</TabPanel>
    </Col>
  </TabWrapper>
);
