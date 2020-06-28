import React from 'react';
import { Card, Tabs, Divider } from 'antd';

import { CouponService, CouponList } from 'components/Coupon';
const { TabPane } = Tabs;

const Coupon = () => (
  <Card title="서비스 구매">
    <Tabs defaultActiveKey="2">
      <TabPane tab="추천" key="1">
        This is 추천 tab
      </TabPane>
      <TabPane tab="시간제 쿠폰" key="2">
        <CouponService />
        <Divider />
        <CouponList />
      </TabPane>
    </Tabs>
  </Card>
);

export default Coupon;
