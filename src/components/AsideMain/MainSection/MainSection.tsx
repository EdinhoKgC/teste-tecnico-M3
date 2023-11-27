import axios from "axios";
import { useEffect, useState } from "react";
import Arrow2 from "../../../assets/img/arrow-2.svg";
import { endpoint } from "../../../constants";
import { useFilter } from "../../../hooks/useFilter";
import { Product } from "../../../types/Product";
import { Card } from "../../Card";
import SortSelectOptions from "../../SortSelectOptions/SortSelectOptions";
import {
  MainSectionContainer,
  MainSectionStyled,
  MobileCategoryTitle,
  MobileFilterButton,
  MobileFilterButtonContainer,
  MobileFilterContainer,
  ProductsSection,
  ShowMoreButton,
  ShowMoreContainer,
  SortArrowDropDown,
  SortContainer,
  SortContainerButton,
  SortContainerSelect,
  SortMobileCloseButton,
  SortMobileContainer,
  SortMobileTitle,
  SortSelectTitle,
} from "./MainSection.style";

const MainSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { activeFilters } = useFilter();

  const filteredProducts = products.filter((p) => {
    if (activeFilters["Cores"].values?.length) {
      return activeFilters["Cores"].values.includes(p.color.toLowerCase());
    }
    if (activeFilters["Tamanhos"].values?.length) {
      return activeFilters["Tamanhos"].values.some((value) =>
        p.size.includes(value)
      );
    }
    if (activeFilters["Faixa de preço"].values?.length) {
      return activeFilters["Faixa de preço"].values.some((value) => {
        const [min, max] = value.split(" a ");
        return p.price >= Number(min) && p.price <= Number(max);
      });
    }
    return true;
  });

  useEffect(() => {
    axios
      .get(`${endpoint}/products`)
      .then((response: any) => setProducts(response.data));
  }, []);

  return (
    <>
      <MainSectionStyled>
        <MainSectionContainer>
          <SortContainer>
            <SortContainerButton>
              <SortMobileContainer>
                <SortMobileTitle>ORDENAR</SortMobileTitle>
                {/* abaixo onclick="closeMenuSort()" */}
                <SortMobileCloseButton>X</SortMobileCloseButton>
              </SortMobileContainer>
              {/* abaixo onclick="showSort()" */}
              <SortContainerSelect>
                <SortSelectTitle>Ordenar por</SortSelectTitle>
                <SortArrowDropDown src={Arrow2} alt="" />
              </SortContainerSelect>
              <SortSelectOptions />
            </SortContainerButton>
          </SortContainer>
          <MobileFilterContainer>
            <MobileCategoryTitle>Blusas</MobileCategoryTitle>
            <MobileFilterButtonContainer>
              {/* abaixo onclick="openMenuFilter()" */}
              <MobileFilterButton>Filtrar</MobileFilterButton>
              {/* abaixo onclick="openMenuSort()" */}
              <MobileFilterButton>Ordenar</MobileFilterButton>
            </MobileFilterButtonContainer>
          </MobileFilterContainer>
          <ProductsSection>
            {filteredProducts.map((product) => (
              <Card
                key={`${product.id}-${product.name}-product`}
                product={product}
              />
            ))}
          </ProductsSection>
          <ShowMoreContainer>
            {/* abaixo onclick="showMore()" */}
            <ShowMoreButton>CARREGAR MAIS</ShowMoreButton>
          </ShowMoreContainer>
        </MainSectionContainer>
      </MainSectionStyled>
    </>
  );
};

export default MainSection;
