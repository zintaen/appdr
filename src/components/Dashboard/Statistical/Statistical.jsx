import React from 'react';
import { Row, Col, Typography, Progress } from 'antd';
import {
  HeaderWrapper,
  HeaderTitle,
  Column,
  ServiceTime,
  ValidityPeriod,
} from './Statistical.styled';

const mockData = [
  { color: '#556fb5', name: '진행 중', count: 28, percent: 30 },
  { color: '#f9b300', name: '전체 완료', count: 456, percent: 80 },
  { color: '#13b5b1', name: '잔여 시간', count: 12, percent: 20 },
];

export const Statistical = () => (
  <>
    <HeaderWrapper>
      <Col span={4}>
        <HeaderTitle>서비스 진행 현황</HeaderTitle>
      </Col>
      <Col span={20}>
        <Row justify="space-around" align="middle">
          {mockData.map((item, index) => (
            <Column key={index.toString()}>
              <Typography>{item.name}</Typography>
              <ServiceTime color={item.color}>{`${item.count} 시간`}</ServiceTime>
              <Progress strokeColor={item.color} percent={item.percent} showInfo={false} />
            </Column>
          ))}
        </Row>
      </Col>
    </HeaderWrapper>
    <ValidityPeriod>쿠폰 유효기간( ~ 2020년 3월 10일)이 얼마 남지 않았습니다.</ValidityPeriod>
  </>
);
