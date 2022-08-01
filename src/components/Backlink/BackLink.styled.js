import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkBackStyle = styled(NavLink)`
  display: flex;
 text-decoration: none;
  color: black;
  font-weight: 500;
  background: rgb(163, 226, 255);
  &:hover {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
    background: rgb(43, 188, 255);
  }
`;

export const BtnBack = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2px;
  margin: 5px 3px 5px 0;
    width: 100px;
    height: 30px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background: rgb(163, 226, 255);
  &:hover {
    background: rgb(43, 188, 255);
  }
`;
