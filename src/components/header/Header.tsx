import "../../styles/components/header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <img
            className="header-logo"
            src="../assets/img/logo-m3.png"
            alt="Logo M3"
          />
        </div>

        <div className="cart-bag">
          <img src="./img/bag.svg" alt="Shopping-Bag" />
          <div className="total">
            <span>0</span>
          </div>
          {/*abaixo onclick="removeItem()" */}
          <div className="remove">
            <span>-</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
