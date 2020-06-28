import styled from 'styled-components';

export const Title = styled.div`
  display: inline-block;
  position: relative;

  :before {
    content: '';
    position: absolute;
    bottom: -17px;
    height: 4px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.gold};
  }
`;
