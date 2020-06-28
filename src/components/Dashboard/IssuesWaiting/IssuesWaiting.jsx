import React from 'react';
import { Card, Space, Typography } from 'antd';
import { CardTitle, Btn } from 'components/common';
import { RowItem, Time, IssueBlock } from './IssuesWaiting.styled';

const issues = [
  { id: 3461, description: '안드로이드 소스 분석', time: 32 },
  {
    id: 3465,
    description: '안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성',
    time: 15,
  },
  { id: 3466, description: '안드로이드 소스 분석', time: 32 },
  {
    id: 3475,
    description: '안드로이드 – 운영서버와 테스트 서버 연결 빌드 생성',
    time: 15,
  },
  { id: 3469, description: '안드로이드 소스 분석', time: 32 },
];

export const IssuesWaiting = () => (
  <Card
    title={
      <CardTitle>
        승인 대기 중인 이슈 <strong>5</strong>건
      </CardTitle>
    }
    extra={<Btn color="#7d7d7d">승인하러 가기</Btn>}
  >
    {issues.map((issue, index) => (
      <RowItem
        even={index % 2}
        key={issue.id}
        justify="space-between"
        align="middle"
        first={!index}
      >
        <IssueBlock>
          <Space>
            <Btn color="#13b5b1">{`Issue,${issue.id}`}</Btn>
            <Typography>{issue.description}</Typography>
          </Space>
        </IssueBlock>
        <Time>{`${issue.time}H`}</Time>
      </RowItem>
    ))}
  </Card>
);
