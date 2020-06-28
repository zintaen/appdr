import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';
import { CardTitle } from 'components/common';
import { RequestInfo, Date } from './RecentRequest.styled';

const requests = [
  {
    description: '저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다',
    date: '2019.12.12',
  },
  {
    description: '저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다',
    date: '2019.12.12',
  },
  {
    description: '저희가 사용중인 앱을 수정하고자 하는데 견적을 알고 싶습니다',
    date: '2019.12.12',
  },
];

export const RecentRequest = () => (
  <Card
    title={<CardTitle>최근 문의 / 요청 현황</CardTitle>}
    extra={
      <Button style={{ color: '#7d7d7d' }} type="link">
        더보기
        <RightCircleFilled />
      </Button>
    }
    style={{ marginTop: 24 }}
  >
    <Space style={{ width: '100%' }} direction="vertical">
      {requests.map((request, idx) => (
        <Row key={idx.toString()} justify="space-between" align="middle">
          <Col span={20}>
            <RequestInfo>
              <p>{request.description}</p>
              <Date>{request.date}</Date>
            </RequestInfo>
          </Col>
          <Col style={{ textAlign: 'center' }} justify="center" span={4}>
            담당자 확인중
          </Col>
        </Row>
      ))}
    </Space>
  </Card>
);
