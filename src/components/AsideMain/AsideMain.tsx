import { FilterProvider } from "../../contexts/filter";
import Aside from "./Aside/Aside";
import { AsideMainContainerStyled } from "./AsideMain.style";
import Main from "./MainSection/MainSection";

const AsideMain = () => {
  return (
    <FilterProvider>
      <AsideMainContainerStyled>
        <Aside />
        <Main />
      </AsideMainContainerStyled>
    </FilterProvider>
  );
};

export default AsideMain;
