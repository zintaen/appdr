import styled from 'styled-components';
import { Input } from 'antd';
import { Btn } from 'components/common';

export const CouponTimeWrapper = styled.div`
  min-width: 250px;
  padding: ${({ theme }) => `${theme.spacing * 4}px 0`};
  position: relative;
  z-index: 1;
  justify-content: center;
  text-align: center;
`;

export const CouponTitle = styled.p`
  background-color: #ffc329;
  padding: 0 5px;
  display: inline-block;
`;

export const CouponTimeImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: -1;
`;

export const Price = styled.p`
  text-align: center;
  margin: 0;
  color: #ea0027;
  font-size: 24px;
`;

export const QuantityBtn = styled(Btn)`
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityInput = styled(Input)`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 0;
  padding: 0 5px;
`;

export const ActionWrapper = styled.div`
  position: relative;
  text-align: right;
  margin-right: 20%;
`;

export const Note = styled.p`
  position: absolute;
  white-space: nowrap;
  bottom: -32px;
  right: 0;
`;
