import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #fa1919;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #020c2e;

  p,
  li {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const MoviePoster = styled.img`
  margin: 10px 20px 10px 0;
  width: 350px;
`;

export const MovieTitle = styled.h2`
  font-size: 35px;
  color: #010d38;
  margin-bottom: 10px;
`;

export const DetailsTitle = styled.h3`
  font-size: 23px;
  margin-bottom: 8px;
`;

export const DetailsLink = styled(Link)`
  font-size: 23px;
  margin-bottom: 8px;
  text-decoration: none;
  color: #020c2e;
  &:hover {
    color: #fa1919;
  }
`;
