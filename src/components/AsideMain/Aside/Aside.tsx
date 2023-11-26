import { filters } from "../../../constants";
import "../../../styles/components/aside.scss";
import { Filter } from "../../Filter";
import {
  AsideCategoryTitle,
  AsideContainerMobile,
  AsideStyled,
  CloseFilterButton,
  FilterButtonMobileApply,
  FilterButtonMobileClean,
  FilterButtonMobileContainer,
  FilterMobileButton,
  FilterMobileContainer,
} from "./Aside.style";

const Aside = () => {
  return (
    <>
      <AsideStyled>
        <AsideCategoryTitle>Blusas</AsideCategoryTitle>
        <FilterMobileContainer>
          <FilterMobileButton>FILTRAR</FilterMobileButton>
          {/*abaixo onclick="closeMenuFilter()" */}
          <CloseFilterButton>X</CloseFilterButton>
        </FilterMobileContainer>
        <AsideContainerMobile>
          {filters.map((filter) => (
            <Filter key={filter.name} data={filter} />
          ))}
          <FilterButtonMobileContainer>
            {/*nos dois button abaixo onclick="closeMenuFilter()" */}
            <FilterButtonMobileApply>APLICAR</FilterButtonMobileApply>
            <FilterButtonMobileClean>LIMPAR</FilterButtonMobileClean>
          </FilterButtonMobileContainer>
        </AsideContainerMobile>
      </AsideStyled>
    </>
  );
};

export default Aside;
