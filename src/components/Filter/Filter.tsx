import { CheckBoxFilter } from "../CheckBoxFilter";
import {
  ButtonMoreLessContainer,
  FilterOptions,
  FilterTitle,
  MenuMobileContainer,
  MenuMobileSpanLess,
  MenuMobileSpanMore1,
  SectionFilter,
} from "./Filter.style";

interface FilterData {
  name: string;
  values: string[];
  style: string;
}

interface FilterProps {
  data: FilterData;
}

const Filter: React.FC<FilterProps> = ({ data }) => {
  const { name, values, style } = data;

  return (
    <SectionFilter>
      <MenuMobileContainer>
        <FilterTitle>{name}</FilterTitle>
        {/*abaixo onclick="showOptionColor()" */}
        <ButtonMoreLessContainer>
          <MenuMobileSpanMore1>|</MenuMobileSpanMore1>
          <MenuMobileSpanLess>|</MenuMobileSpanLess>
        </ButtonMoreLessContainer>
      </MenuMobileContainer>

      <FilterOptions>
        <div className="dropDown-color hidden">
          {values.map((value) => {
            switch (style) {
              case "squares":
                return (
                  <div className="size">
                    <label className="size-item">
                      {value}
                      <input
                        type="checkbox"
                        className="checkboxs2"
                        name="size"
                        value="M"
                      />
                      {/*no input acima onchange="filterColorAndSize()" */}
                    </label>
                  </div>
                );
              default:
                return (
                  <CheckBoxFilter
                    key={name}
                    type="checkbox"
                    name="color"
                    value={value}
                  />
                );
            }
          })}
        </div>
      </FilterOptions>
      {/*abaixo onclick="showColor()" */}
      {/* <a className="show-colors" href="#">
        Ver todas as cores <img src={Arrow} alt="arrow-down" />
      </a> */}
    </SectionFilter>
  );
};

export default Filter;
