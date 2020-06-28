import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const Wrapper = styled(Layout)`
  height: 100vh;
`;

export const Main = styled(Content)`
  background-color: #f1f1f1;
  margin: 24px 16px;
  display: flex;
  flex-direction: column;
  min-height: auto;
`;
