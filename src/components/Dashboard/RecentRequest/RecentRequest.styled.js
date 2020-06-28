import styled from 'styled-components';

export const RequestInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-right: ${({ theme }) => `${theme.spacing * 2}px`};
`;

export const Date = styled.div`
  color: #959595;
`;
