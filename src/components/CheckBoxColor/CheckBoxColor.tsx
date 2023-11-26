import {
  CheckBoxInputColor,
  ColorListItem,
  ColorListItemLabel,
  ColorListItemName,
} from "./CheckBoxColor.style";

interface Props {
  type: string;
  name: string;
  value: string;
}

const CheckBoxColor = ({ type, name, value }: Props) => {
  return (
    <>
      <ColorListItem>
        <ColorListItemLabel>
          {/*abaixo onchange="filterColorAndSize()" */}
          <CheckBoxInputColor type={type} name={name} value={value} />
          <ColorListItemName>{value}</ColorListItemName>
        </ColorListItemLabel>
      </ColorListItem>
    </>
  );
};

export default CheckBoxColor;
