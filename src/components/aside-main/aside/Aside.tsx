const Aside = () => {
  return (
    <>
      <aside>
        <h1>Blusas</h1>
        <div className="filter-mobile">
          <p>FILTRAR</p>
          {/*abaixo onclick="closeMenuFilter()" */}
          <h2>X</h2>
        </div>
        <div className="aside-container">
          <section className="colors">
            <div className="menu-mobile">
              <h3>CORES</h3>
              {/*abaixo onclick="showOptionColor()" */}
              <div className="btn-more-less">
                <span className="more1">|</span>
                <span className="less">|</span>
              </div>
            </div>

            <ul className="colors-container">
              <div className="dropDown-color hidden">
                <li className="color">
                  <label className="checkbox-container">
                    {/*abaixo onchange="filterColorAndSize()" */}
                    <input
                      type="checkbox"
                      name="color"
                      value="Amarelo"
                      className="checkboxs1"
                    />
                    <p>Amarelo</p>
                  </label>
                </li>

                <li className="color">
                  <label className="checkbox-container">
                    {/*abaixo onchange="filterColorAndSize()" */}
                    <input
                      type="checkbox"
                      name="color"
                      value="Azul"
                      className="checkboxs1"
                    />
                    <p>Azul</p>
                  </label>
                </li>

                <li className="color">
                  <label className="checkbox-container">
                    {/*abaixo onchange="filterColorAndSize()" */}
                    <input
                      type="checkbox"
                      name="color"
                      value="Branco"
                      className="checkboxs1"
                    />
                    <p>Branco</p>
                  </label>
                </li>

                <li className="color">
                  <label className="checkbox-container">
                    {/*abaixo onchange="filterColorAndSize()" */}
                    <input
                      type="checkbox"
                      name="color"
                      value="Cinza"
                      className="checkboxs1"
                    />
                    <p>Cinza</p>
                  </label>
                </li>

                <li className="color">
                  <label className="checkbox-container">
                    {/*abaixo onchange="filterColorAndSize()" */}
                    <input
                      type="checkbox"
                      name="color"
                      value="Laranja"
                      className="checkboxs1"
                    />
                    <p>Laranja</p>
                  </label>
                </li>

                <div className="drop-down hide">
                  <li className="color">
                    <label className="checkbox-container">
                      {/*abaixo onchange="filterColorAndSize()" */}
                      <input
                        type="checkbox"
                        name="color"
                        value="Verde"
                        className="checkboxs1"
                      />
                      <p>Verde</p>
                    </label>
                  </li>

                  <li className="color">
                    <label className="checkbox-container">
                      {/*abaixo onchange="filterColorAndSize()" */}
                      <input
                        type="checkbox"
                        name="color"
                        value="Vermelho"
                        className="checkboxs1"
                      />
                      <p>Vermelho</p>
                    </label>
                  </li>

                  <li className="color">
                    <label className="checkbox-container">
                      {/*abaixo onchange="filterColorAndSize()" */}
                      <input
                        type="checkbox"
                        name="color"
                        value="Preto"
                        className="checkboxs1"
                      />
                      <p>Preto</p>
                    </label>
                  </li>

                  <li className="color">
                    <label className="checkbox-container">
                      {/*abaixo onchange="filterColorAndSize()" */}
                      <input
                        type="checkbox"
                        name="color"
                        value="Rosa"
                        className="checkboxs1"
                      />
                      <p>Rosa</p>
                    </label>
                  </li>

                  <li className="color">
                    <label className="checkbox-container">
                      {/*abaixo onchange="filterColorAndSize()" */}
                      <input
                        type="checkbox"
                        name="color"
                        value="Vinho"
                        className="checkboxs1"
                      />
                      <p>Vinho</p>
                    </label>
                  </li>
                </div>
              </div>
            </ul>
            {/*abaixo onclick="showColor()" */}
            <a className="show-colors" href="#">
              Ver todas as cores <img src="./img/arrow.svg" alt="arrow-down" />
            </a>
          </section>

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
        </div>
      </aside>
    </>
  );
};

export default Aside;
