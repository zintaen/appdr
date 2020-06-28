import styled from 'styled-components';
import { Button } from 'antd';

export const BtnCustom = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color }) => color};
  border-color: ${({ color }) => color};
  border-radius: 0;

  :focus,
  :hover {
    background-color: ${({ color }) => color};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ color }) => color};
  }
`;
