import React from "react";
import { useFilter } from "../../hooks/useFilter";
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
}

const CheckBoxFilter: React.FC<CheckBoxFilterProps> = ({
  type,
  name,
  value,
}) => {
  const { addActiveFilters, removeActiveFilters } = useFilter();
  return (
    <>
      <ColorListItem>
        <ColorListItemLabel>
          {/*abaixo onchange="filterColorAndSize()" */}
          <CheckBoxInputColor type={type} name={name} value={value} onChange={
            (e) => {
              if (e.target.checked) {
                addActiveFilters(name, value);
              } else {
                removeActiveFilters(name, value);
              }
            }
          } />
          <ColorListItemName>{value}</ColorListItemName>
        </ColorListItemLabel>
      </ColorListItem>
    </>
  );
};

export default CheckBoxFilter;
