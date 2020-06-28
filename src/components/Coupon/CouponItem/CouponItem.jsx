import React from 'react';
import { Row, Col } from 'antd';
import { Btn } from 'components/common';
import {
  CouponTimeWrapper,
  CouponTitle,
  CouponTimeImage,
  Price,
  QuantityBtn,
  QuantityInput,
  ActionWrapper,
  Note,
} from './CouponItem.styled';
import { moneyFormat } from 'utils/moneyFormat';

import prodImg from 'assets/images/product.png';

const CouponItem = ({ title, time, price, quantity, inventory }) => (
  <Row gutter={16} align="middle">
    <Col span={6}>
      <CouponTimeWrapper>
        <CouponTimeImage src={prodImg} />
        <CouponTitle>{title}</CouponTitle>
        <p style={{ fontSize: 20 }}>
          <strong>{time}</strong>시간 쿠폰
        </p>
      </CouponTimeWrapper>
    </Col>
    <Col span={6}>
      <Price>{moneyFormat(price)}</Price>
    </Col>
    <Col span={6}>
      <Row align="middle" justify="center">
        {inventory > 1 && <QuantityBtn color="#aaaaaa">-</QuantityBtn>}
        <QuantityInput defaultValue={quantity} />
        {inventory > 1 && <QuantityBtn color="#aaaaaa">+</QuantityBtn>}
      </Row>
    </Col>
    <Col span={6}>
      <ActionWrapper>
        <Btn color="#1b1b1b" size="large" style={{ padding: '0 32px' }}>
          구매하기
        </Btn>
        <Note>
          <span>시간당 35,000원</span> / <span>유효기간 3개월</span> / <span>VAT 별도</span>
        </Note>
      </ActionWrapper>
    </Col>
  </Row>
);

export default CouponItem;
