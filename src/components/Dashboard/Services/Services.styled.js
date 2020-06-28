import styled from 'styled-components';

export const Note = styled.div`
  position: absolute;
  top: -20px;
  font-size: 12px;
  left: 0;
  width: 100%;
  right: -16px;
  text-align: center;

  :before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 10px;
    background-color: ${({ active }) => (active ? '#0dd92e' : '#b5b5b5')};
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Date = styled.div`
  color: #959595;
  padding-left: 12px;
`;
