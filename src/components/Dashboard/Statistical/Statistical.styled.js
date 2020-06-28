import styled from 'styled-components';
import { Row, Typography } from 'antd';

export const HeaderWrapper = styled(Row)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderTitle = styled.h3`
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  font-weight: 400;
`;

export const Column = styled.div`
  width: 240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing * 2}px`};
`;

export const ServiceTime = styled(Typography)`
  font-size: 18px;
  color: ${({ color }) => color || 'white'};
`;

export const ValidityPeriod = styled.div`
  background-color: #7d8d9d;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing}px`};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => `${theme.spacing}px`};
`;
