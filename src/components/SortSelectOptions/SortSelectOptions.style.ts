import styled from "styled-components";

export const SortOptionsList = styled.ul`
  border: 1px solid #808080;
  height: 100px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
    height: 80px;
    margin-top: 20px;
    border: none;
    
  }
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

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
`;
