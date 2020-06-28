import React from 'react';
import CouponItem from '../CouponItem';

const coupons = [
  { title: '개발자 시간제 쿠폰', time: 20, price: 700000, quantity: 1, inventory: 1 },
  { title: '개발자 시간제 쿠폰', time: 40, price: 1200000, quantity: 1, inventory: 5 },
  { title: '개발자 시간제 쿠폰', time: 80, price: 1500000, quantity: 1, inventory: 7 },
  { title: '개발자 시간제 쿠폰', time: 120, price: 2000000, quantity: 1, inventory: 1 },
  { title: '개발자 시간제 쿠폰', time: 50, price: 500000, quantity: 1, inventory: 2 },
];
export const CouponList = () => (
  <>
    {coupons.map((coupon, index) => (
      <CouponItem
        key={index.toString()}
        title={coupon.title}
        time={coupon.time}
        price={coupon.price}
        quantity={coupon.quantity}
        inventory={coupon.inventory}
      />
    ))}
  </>
);
