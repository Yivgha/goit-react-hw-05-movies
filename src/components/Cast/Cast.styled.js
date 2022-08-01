import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  text-align: center;
  margin: 0 auto;
  padding: 5px;
  border: 2px solid #f5f5f5;
  background: white;
  font-family: 'Open Sans';
  transition: 0.3s ease-in;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Info = styled.p`
  font-size: 18px;
  font-style: italic;
`;