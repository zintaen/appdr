import React from 'react';
import { Card, Space, Typography } from 'antd';
import { CardTitle, Btn } from 'components/common';
import { RowItem, Time, IssueBlock } from '../IssuesWaiting/IssuesWaiting.styled';
import { Note, Date } from './Services.styled';

const services = [
  {
    id: 2336,
    description: '서버 – 댓글 기능 업데이트',
    date: '2019.09.04',
    note: '개발자 배정',
    time: 32,
    active: false,
  },
  {
    id: 2337,
    description: '서버 – 상세페이지 화면 지도의 카카오톡 공유하기 기능 업데이트',
    date: '2019.09.04',
    note: '개발자 배정',
    time: 32,
    active: true,
  },
  {
    id: 2338,
    description: '서버 – 댓글 기능 업데이트',
    date: '2019.09.04',
    note: '개발자 배정',
    time: 32,
    active: true,
  },
  {
    id: 2339,
    description: '서버 – 상세페이지 화면 지도의 카카오톡 공유하기 기능 업데이트',
    date: '2019.09.04',
    note: '개발자 배정',
    time: 32,
    active: true,
  },
  {
    id: 2340,
    description: '서버 – 댓글 기능 업데이트',
    date: '2019.09.04',
    note: '개발자 배정',
    time: 32,
    active: true,
  },
];

export const Services = () => (
  <Card
    title={
      <CardTitle>
        진행 중인 이슈 <strong>14</strong>건
      </CardTitle>
    }
    extra={<Btn />}
  >
    {services.map((item, index) => (
      <RowItem even={index % 2} key={item.id} justify="space-between" align="middle" first={!index}>
        <IssueBlock>
          <Space>
            <Btn color="#556fb5">{`Issue,${item.id}`}</Btn>
            <Typography>{item.description}</Typography>
          </Space>
          <Date>{item.date}</Date>
        </IssueBlock>
        <Time>
          <span>{`${item.time}H`}</span>
          <Note active={item.active}>{item.note}</Note>
        </Time>
      </RowItem>
    ))}
  </Card>
);
