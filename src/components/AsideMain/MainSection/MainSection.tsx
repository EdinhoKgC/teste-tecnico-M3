import Arrow2 from "../../../assets/img/arrow-2.svg";
import "../../../styles/components/mainSection.scss";

const Main = () => {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="sort-container">
            <div className="sorts">
              <div className="sort-mobile">
                <p>ORDENAR</p>
                {/* abaixo onclick="closeMenuSort()" */}
                <h3>X</h3>
              </div>
              {/* abaixo onclick="showSort()" */}
              <div className="sort">
                <p>Ordenar por</p>
                <img src={Arrow2} alt="" />
              </div>
              <ul className="sort-options hide">
                {/* abaixo onclick="sortDate()" */}
                <li>Mais recentes</li>
                {/* abaixo onclick="sortLower()" */}
                <li>Menor preço</li>
                {/* abaixo onclick="sortHigh()" */}
                <li>Maior preço</li>
              </ul>
              <ul className="sort-options-mob">
                {/* abaixo onclick="sortDate()" */}
                <li>Mais recentes</li>
                {/* abaixo onclick="sortLower()" */}
                <li>Menor preço</li>
                {/* abaixo onclick="sortHigh()" */}
                <li>Maior preço</li>
              </ul>
            </div>
          </div>
          <div className="mobile-filter-btn">
            <h1>Blusas</h1>
            <div className="btn-main-container">
              {/* abaixo onclick="openMenuFilter()" */}
              <button>Filtrar</button>
              {/* abaixo onclick="openMenuSort()" */}
              <button>Ordenar</button>
            </div>
          </div>
          <section id="cards"></section>
          <div className="btn-container">
            {/* abaixo onclick="showMore()" */}
            <button>CARREGAR MAIS</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
