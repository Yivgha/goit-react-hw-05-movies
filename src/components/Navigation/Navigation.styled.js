import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  gap: 15px;
  border-bottom: 2px solid rgb(0, 198, 255);
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
    background: rgb(43, 188, 255);
  }
  &:hover {
    background: rgb(163, 226, 255);
  }
`;