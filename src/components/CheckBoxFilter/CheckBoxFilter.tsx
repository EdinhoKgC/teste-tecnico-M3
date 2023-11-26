import React from "react";
import {
  CheckBoxInputColor,
  ColorListItem,
  ColorListItemLabel,
  ColorListItemName,
} from "./CheckBoxFilter.style";

interface CheckBoxFilterProps {
  type: string;
  name: string;
  value: string;
  key: string;
}

const CheckBoxFilter: React.FC<CheckBoxFilterProps> = ({
  type,
  name,
  value,
  key,
}) => {
  return (
    <>
      <ColorListItem>
        <ColorListItemLabel>
          {/*abaixo onchange="filterColorAndSize()" */}
          <CheckBoxInputColor key={key} type={type} name={name} value={value} />
          <ColorListItemName>{value}</ColorListItemName>
        </ColorListItemLabel>
      </ColorListItem>
    </>
  );
};

export default CheckBoxFilter;
