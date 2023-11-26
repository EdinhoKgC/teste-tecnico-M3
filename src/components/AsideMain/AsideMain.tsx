import Aside from "./Aside/Aside";
import Main from "./MainSection/MainSection";

const AsideMain = () => {
  return (
    <>
      <div className="content-container">
        <Aside />
        <Main />
      </div>
    </>
  );
};

export default AsideMain;
