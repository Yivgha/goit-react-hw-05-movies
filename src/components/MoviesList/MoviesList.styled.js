import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmItem = styled(Link)`
  font-size: 20px;
  color: darkslategray;
  transition: 0.3s ease-in;
  text-decoration: underline;
  &:hover {
    background: rgb(66, 135, 245);
  }
`;

export const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;