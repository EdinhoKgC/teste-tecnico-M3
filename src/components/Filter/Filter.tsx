import { useFilter } from "../../hooks/useFilter";
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
  
  const { addActiveFilters, removeActiveFilters } = useFilter();

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
                  <div className={name}
                  key={`${name}-${value}-filter`}>
                    <label className="size-item">
                      {value}
                      <input
                        type="checkbox"
                        className="checkboxs2"
                        name={name}
                        value={value}
                        onChange={(e) => {
                          if (e.target.checked) {
                            addActiveFilters(name, value);
                          } else {
                            removeActiveFilters(name, value);
                          }
                        }}
                      />
                      {/*no input acima onchange="filterColorAndSize()" */}
                    </label>
                  </div>
                );
              default:
                return (
                  <CheckBoxFilter
                    key={`${name}-${value}-filter`}
                    type="checkbox"
                    name={name}
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
