import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const Wapper = styled(Header)`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;

export const Icon = styled.div`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const RightBlock = styled.div`
  margin: 0 20px;
  flex: 1;
  text-align: right;
`;
