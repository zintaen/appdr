import React from 'react';

import { CouponWrapper, CouponContent, CouponImage } from './CouponService.styled';
import coupon from 'assets/images/coupon.jpg';

export const CouponService = () => (
  <CouponWrapper>
    <CouponContent>
      <h2>앱닥터 시간제 쿠폰 서비스</h2>
      <p>
        앱닥터만의 새로운 개발 서비스로 시간을 쿠폰처럼 구매하고, 개발에 필요한 시간만큼 소진하는
        합리적 서비스를 경험해보세요.
      </p>
    </CouponContent>
    <CouponImage alt="coupon image" src={coupon} />
  </CouponWrapper>
);
