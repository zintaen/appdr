import styled from 'styled-components';
import { Button } from 'antd';

export const NewContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const MainNewWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: a;
`;

export const MainNewTitle = styled.h4`
  padding-right: 10%;
  padding-bottom: ${({ theme }) => `${theme.spacing * 3}px`};
`;

export const ViewMore = styled(Button)`
  align-self: flex-end;
  color: #7d7d7d;
`;

export const SubNewWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ first }) => (first ? 0 : '12px')};
`;

export const SubNewContent = styled.div`
  flex: 1;
  padding-left: ${({ theme }) => `${theme.spacing * 2}px`};
`;

export const SubNewTitle = styled.h5`
  padding-right: 5px;
  padding-bottom: ${({ theme }) => `${theme.spacing * 2}px`};
`;
