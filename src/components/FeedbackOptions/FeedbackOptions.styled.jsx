import styled from 'styled-components';


export const List = styled.ul`
  display: flex;
  margin: 10px 0 0;
  padding-left: 5px;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px;
`;