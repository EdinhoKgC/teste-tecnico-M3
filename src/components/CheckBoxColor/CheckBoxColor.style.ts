import styled from "styled-components";

export const ColorListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ColorListItemLabel = styled.label`
  display: grid;
  align-items: center;
  grid-template-columns: 0.9em auto;
  font-weight: bold;
  line-height: 1.1;
  margin-top: 1em;
`;

export const CheckBoxInputColor = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #fff;
  color: currentColor;
  margin: 0;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid $lightGray;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    background-color: $blue;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }
  &:checked::before {
    background-color: $blue;
    transform: scale(1);
  }
`;

export const ColorListItemName = styled.p`
  font-size: 14px;
  margin-left: 5px;
`;
