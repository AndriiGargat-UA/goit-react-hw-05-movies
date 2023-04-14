import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  color: #010d38;
  margin-bottom: 20px;
`;

export const MovieLink = styled(Link)`
  font-size: 23px;
  margin-bottom: 8px;
  text-decoration: none;
  color: #020c2e;
  &:hover {
    color: #fa1919;
  }
`;
