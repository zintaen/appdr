import React from 'react';
import { Space, Typography } from 'antd';

import { StepTitle, StepWrapper, StepLine, Dot } from './Steps.styled';

const steps = [
  { name: '문의/요청', color: '#c8ebea' },
  { name: '요청 분석', color: '#3cbfbb' },
  { name: '승인대기중', color: '#11b1ad' },
  { name: '개발자 배정', color: '#fefefe' },
  { name: '진행중', color: '#c9d0e5' },
  { name: '개발완료', color: '#7f91c2' },
  { name: '고객 검수', color: '#4b65aa' },
  { name: '개발종료', color: '#0dd92e' },
];

export const Steps = () => (
  <>
    <StepTitle>앱닥터 문의 시 아래와 같은 프로세스로 진행됩니다.</StepTitle>
    <StepWrapper justify="space-around">
      <StepLine />
      {steps.map((step, index) => (
        <Space key={index.toString()} direction="vertical" align="center">
          <Dot color={step.color} />
          <Typography>{step.name}</Typography>
        </Space>
      ))}
    </StepWrapper>
  </>
);
