import axios from "axios";
import { useEffect, useState } from "react";
import Arrow2 from "../../../assets/img/arrow-2.svg";
import { endpoint } from "../../../constants";
import "../../../styles/components/mainSection.scss";
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

interface Product {
  id: number;
  name: string;
  price: number;
  parcelamento: number[];
  color: string;
  image: string;
  size: string[];
  date: string;
}

const MainSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/products`)
      .then((response) => setProducts(response.data));
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
              <ul className="sort-options-mob">
                {/* abaixo onclick="sortDate()" */}
                <li>Mais recentes</li>
                {/* abaixo onclick="sortLower()" */}
                <li>Menor preço</li>
                {/* abaixo onclick="sortHigh()" */}
                <li>Maior preço</li>
              </ul>
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
            {products.map((product) => (
              <Card key={product.id} product={product} />
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
