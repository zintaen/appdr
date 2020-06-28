import React from 'react';
import { Card, Row, Col, Button, Typography, Avatar } from 'antd';
import { RightCircleFilled } from '@ant-design/icons';

import { CardTitle } from 'components/common';
import {
  NewContainer,
  MainNewWrapper,
  MainNewTitle,
  ViewMore,
  SubNewWrapper,
  SubNewContent,
  SubNewTitle,
} from './News.styled';
import mainAvatar from 'assets/images/main-new.png';
import subAvatar from 'assets/images/sub-new.png';

export const News = () => (
  <Card title={<CardTitle>앱닥터 소식</CardTitle>} extra={<Button />} style={{ marginTop: 24 }}>
    <Row gutter={16}>
      <Col span={12}>
        <NewContainer>
          <Avatar shape="square" size={250} src={mainAvatar} />
          <MainNewWrapper>
            <MainNewTitle>
              앱닥터 허석균 대표, 김빛나 본부장 [아산나눔재단/MARU180] 인터뷰 소식!!
            </MainNewTitle>
            <Typography.Paragraph>
              안녕하세요. 앱닥터 입니다. 오늘 알려드릴 소식은 아산나눔재단/MARU180에서 진행한 인터뷰
              소식입니다. 이번 인터뷰의 주인공은 바로 앱닥터의 허석균 대표와 김빛나 본부장입니다.
              MARU180의 새 식구가 된 것을 격하게 환영해 주셔서 진심으로 감사한 자리였는데…
            </Typography.Paragraph>
            <ViewMore type="link">
              더보기
              <RightCircleFilled />
            </ViewMore>
          </MainNewWrapper>
        </NewContainer>
      </Col>
      <Col span={12}>
        <SubNewWrapper first>
          <Avatar shape="square" size={120} src={subAvatar} />
          <SubNewContent>
            <SubNewTitle>
              앱닥터 허석균 대표, 김빛나 본부장 [아산나눔재단/MARU180] 인터뷰 소식!!
            </SubNewTitle>
            <Typography.Paragraph>
              안녕하세요. 앱닥터 입니다. 오늘 알려드릴 소식은 아산나눔재단/MARU180에서 진행한 인터뷰
              소식입니다. 이번 인터뷰의 주인공은 바로 앱닥터의 허석균 대표와 김빛나...
            </Typography.Paragraph>
          </SubNewContent>
        </SubNewWrapper>
        <SubNewWrapper>
          <Avatar shape="square" size={120} src={subAvatar} />
          <SubNewContent>
            <SubNewTitle>
              앱닥터 허석균 대표, 김빛나 본부장 [아산나눔재단/MARU180] 인터뷰 소식!!
            </SubNewTitle>
            <Typography.Paragraph>
              안녕하세요. 앱닥터 입니다. 오늘 알려드릴 소식은 아산나눔재단/MARU180에서 진행한 인터뷰
              소식입니다. 이번 인터뷰의 주인공은 바로 앱닥터의 허석균 대표와 김빛나...
            </Typography.Paragraph>
          </SubNewContent>
        </SubNewWrapper>
      </Col>
    </Row>
  </Card>
);
