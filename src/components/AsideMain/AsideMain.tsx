import Aside from "./Aside/Aside";
import { AsideMainContainerStyled } from "./AsideMain.style";
import Main from "./MainSection/MainSection";

const AsideMain = () => {
  return (
    <>
      <AsideMainContainerStyled>
        <Aside />
        <Main />
      </AsideMainContainerStyled>
    </>
  );
};

export default AsideMain;
