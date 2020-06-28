import styled from 'styled-components';
import { Row } from 'antd';

export const TabWrapper = styled(Row)`
  margin-top: ${({ theme }) => `${theme.spacing * 2}px`};
`;

export const TabPanel = styled.div`
  padding: ${({ theme }) => `${theme.spacing}px`};
  font-size: 16px;
  text-align: center;
  background-color: ${({ active, theme }) => (active ? theme.colors.gold : '#d2d2d2')};
`;
