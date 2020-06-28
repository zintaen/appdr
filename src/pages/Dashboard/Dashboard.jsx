import React from 'react';
import { Row, Col } from 'antd';
import {
  Statistical,
  Tabs,
  Steps,
  IssuesWaiting,
  Services,
  RecentRequest,
  News,
} from 'components/Dashboard';

const Dashboard = () => (
  <>
    <Statistical />
    <Tabs />
    <Steps />
    <Row gutter={16} style={{ marginTop: 24 }}>
      <Col span={12}>
        <IssuesWaiting />
      </Col>
      <Col span={12}>
        <Services />
      </Col>
    </Row>
    <RecentRequest />
    <News />
  </>
);

export default Dashboard;
