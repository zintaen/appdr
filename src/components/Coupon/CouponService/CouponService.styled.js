import styled from 'styled-components';

export const CouponWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing * 3}px`};
`;

export const CouponContent = styled.div`
  flex: 1;
  padding-right: ${({ theme }) => `${theme.spacing * 3}px`};
`;

export const CouponImage = styled.img`
  min-height: 100px;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
