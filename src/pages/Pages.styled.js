import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
background: rgb(163, 226, 255);
font-size: 15px;
font-weight: 500;
  border: 2px solid #f5f5f5;
  display: flex;
  padding: 8px 12px;
  width: 60px;
  border-radius: 4px;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  transition: All 0.3s ease;
  &.active {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
    background: rgb(43, 188, 255);
  }
  &:hover {
    background: rgb(163, 226, 255);
  }
`;

export const List = styled.ul`
  display: flex;
 flex-direction: column;
 padding:  10px;
 gap: 5px;
 `;

export const Form = styled.form`
 margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  outline: none;
  `;

export const Btn = styled.button`
margin-left:10px;
width: 30px;
height: 30px;
  display: block;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background: rgb(163, 226, 255);
  &:hover {
   
    background: rgb(43, 188, 255);
  }
`;

export const Input = styled.input`
  height: 28px;
`;