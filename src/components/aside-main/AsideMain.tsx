import "../../styles/components/aside.scss";
import Aside from "./aside/Aside";
import Main from "./main/Main";

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
