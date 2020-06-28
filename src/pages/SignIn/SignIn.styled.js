import styled from 'styled-components';
import { Row, Form } from 'antd';

const { Item } = Form;

export const Wrapper = styled.div`
  width: 360px;
  margin: 7% auto;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const Title = styled.h2`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 400;
  font-size: 28px;
`;

export const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 16px;
`;

export const Action = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export const FormItem = styled(Item)`
  margin-bottom: 0;
`;
