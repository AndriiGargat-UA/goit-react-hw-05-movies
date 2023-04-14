import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding: 20px;
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

export const SearchInput = styled.input`
  margin: 0 8px 8px 0;
`;
