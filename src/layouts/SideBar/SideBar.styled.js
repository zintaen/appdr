import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, Avatar } from 'antd';

export const LinkComponent = styled(Link)`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const Image = styled.img`
  height: 36px;
  width: auto;
  display: block;
`;

export const UserWrapper = styled.div`
  margin-top: ${({ theme }) => `${2 * theme.spacing}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 300;
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing}px ${2 * theme.spacing}px`};
  outline: none;
  box-shadow: none;
  display: block;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    outline: none;
    border-color: ${({ theme }) => theme.colors.white};
    border-style: solid;
    box-shadow: none;
  }
`;

export const MenuWrapper = styled(Menu)`
  margin-top: 20px;
  width: 241px;
  background-color: #313131;
`;

export const MenuItem = styled(Menu.Item)`
  font-weight: 600;
  font-size: 14px;
  z-index: 0;
  color: ${({ theme }) => theme.colors.white};

  &.ant-menu-item-selected {
    background-color: #151515 !important;
    color: ${({ theme }) => theme.colors.gold};
    a {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
  a {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
  }
`;
