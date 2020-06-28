import styled from 'styled-components';
import { Row, Divider } from 'antd';

export const StepTitle = styled.h4`
  margin-top: ${({ theme }) => `${theme.spacing * 3}px`};
  font-weight: 400;
`;

export const StepWrapper = styled(Row)`
  margin-top: ${({ theme }) => `${theme.spacing * 2}px`};
`;

export const StepLine = styled(Divider)`
  margin: 0;
  position: relative;
  top: 9px;
  border-width: 2px;
  border-color: #dcdcdc;
  z-index: 0;
`;

export const Dot = styled.div`
  height: ${({ theme }) => `${theme.spacing * 2}px`};
  width: ${({ theme }) => `${theme.spacing * 2}px`};
  border-radius: ${({ theme }) => `${theme.spacing * 2}px`};
  background: ${({ color }) => color || '#c8ebea'};
  position: relative;
  z-index: 1;
`;
