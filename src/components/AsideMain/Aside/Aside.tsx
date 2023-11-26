import Arrow from "../../../assets/img/arrow.svg";
import "../../../styles/components/aside.scss";
import CheckBoxColor from "../../CheckBoxColor/CheckBoxColor";
import {
  AsideCategoryTitle,
  AsideContainerMobile,
  AsideStyled,
  ButtonMoreLessContainer,
  CloseFilterButton,
  FilterColorTitle,
  FilterMobileButton,
  FilterMobileContainer,
  MenuMobileContainer,
  MenuMobileSpanLess,
  MenuMobileSpanMore1,
  SectionColorFilter,
  UnorderedListColors,
} from "./Aside.style";

const Aside = () => {
  const colors = [
    "amarelo",
    "azul",
    "branco",
    "cinza",
    "laranja",
    "verde",
    "vermelho",
    "preto",
    "rosa",
    "vinho",
  ];

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
          <SectionColorFilter>
            <MenuMobileContainer>
              <FilterColorTitle>CORES</FilterColorTitle>
              {/*abaixo onclick="showOptionColor()" */}
              <ButtonMoreLessContainer>
                <MenuMobileSpanMore1>|</MenuMobileSpanMore1>
                <MenuMobileSpanLess>|</MenuMobileSpanLess>
              </ButtonMoreLessContainer>
            </MenuMobileContainer>

            <UnorderedListColors>
              <div className="dropDown-color hidden">
                {colors.map((color) => (
                  <CheckBoxColor type="checkbox" name="color" value={color} />
                ))}
              </div>
            </UnorderedListColors>
            {/*abaixo onclick="showColor()" */}
            <a className="show-colors" href="#">
              Ver todas as cores <img src={Arrow} alt="arrow-down" />
            </a>
          </SectionColorFilter>

          <section className="sizes">
            <div className="menu-mobile">
              <h3>TAMANHOS</h3>
              {/*abaixo onclick="showOptionSize()" */}
              <div className="btn-more-less">
                <span className="more2">|</span>
                <span className="less">|</span>
              </div>
            </div>

            <div className="dropDown-size hidden">
              <div className="size">
                <label className="size-item">
                  P
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="P"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  M
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="M"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  G
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="G"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  GG
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="GG"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  U
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="U"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  36
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="36"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  38
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="38"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>
                <label className="size-item">
                  40
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="40"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  42
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="42"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>
                <label className="size-item">
                  44
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="44"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>

                <label className="size-item">
                  46
                  <input
                    type="checkbox"
                    className="checkboxs2"
                    name="size"
                    value="46"
                  />
                  {/*no input acima onchange="filterColorAndSize()" */}
                </label>
              </div>
            </div>
          </section>

          <section className="prices">
            <div className="menu-mobile">
              <h3>FAIXA DE PREÇO</h3>
              {/* abaixo onclick="showOptionPrice()" */}
              <div className="btn-more-less">
                <span className="more3">|</span>
                <span className="less">|</span>
              </div>
            </div>

            <ul className="prices-container">
              <div className="dropDown-price hidden">
                <li className="price">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="price"
                      value="50"
                      className="checkboxs"
                    />
                    {/*no input acima onchange="filterPrice()" */}
                  </label>
                  <p>de R$0 até R$50</p>
                </li>

                <li className="price">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="price"
                      value="150"
                      className="checkboxs"
                    />
                    {/*no input acima onchange="filterPrice()" */}
                  </label>
                  <p>de R$51 até R$150</p>
                </li>

                <li className="price">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="price"
                      value="300"
                      className="checkboxs"
                    />
                    {/*no input acima onchange="filterPrice()" */}
                  </label>
                  <p>de R$151 até R$300</p>
                </li>

                <li className="price">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="price"
                      value="500"
                      className="checkboxs"
                    />
                    {/*no input acima onchange="filterPrice()" */}
                  </label>
                  <p>de R$301 até R$500</p>
                </li>

                <li className="price">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="price"
                      value="1000"
                      className="checkboxs"
                    />
                    {/*no input acima onchange="filterPrice()" */}
                  </label>
                  <p>a partir de R$500</p>
                </li>
              </div>
            </ul>
          </section>
          <div className="btn-apply">
            {/*nos dois button abaixo onclick="closeMenuFilter()" */}
            <button className="apply">APLICAR</button>
            <button className="clean">FECHAR</button>
          </div>
        </AsideContainerMobile>
      </AsideStyled>
    </>
  );
};

export default Aside;
