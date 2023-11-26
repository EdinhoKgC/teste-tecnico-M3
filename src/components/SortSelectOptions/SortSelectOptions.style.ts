import styled from "styled-components";

export const SortOptionsList = styled.ul`
  border: 1px solid #808080;
  height: 100px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
`;

export const SortOptionItem = styled.li`
  padding: 5px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: $blue;
    color: white;
  }
`;
