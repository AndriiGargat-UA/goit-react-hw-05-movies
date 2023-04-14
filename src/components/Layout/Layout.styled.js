import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
`;

export const MainMenu = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #94d4e0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavBar = styled.ul`
  display: flex;
`;

export const BarLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  color: #01032b;

  &.active {
    color: #fa1919;
  }

  &:hover {
    border-bottom: 2px solid black;
  }
`;
