import styled from 'styled-components';

export const RowItem = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 5px;
  background-color: ${({ even }) => (even ? '#fafbf5' : '#f5f8fb')};
  border: 1px solid #dcdcdc;
  margin-top: ${({ first, theme }) => (first ? 0 : `${theme.spacing * 2}px`)};
`;

export const Time = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-right: ${({ theme }) => `${theme.spacing * 2}px`};
  padding-left: ${({ theme }) => `${theme.spacing * 4}px`};
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 30px;
    background: #dcdcdc;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const IssueBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-right: ${({ theme }) => `${theme.spacing * 2}px`};
`;
