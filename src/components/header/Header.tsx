import Logo from "../../assets/img/logo-m3.png";
import ShoppingBag from "../../assets/img/shopping-bag-icon.png";
import "../../styles/components/header.scss";
import {
  CounterShoppingBag,
  CounterShoppingBagContainer,
  HeaderStyled,
  LogoContainer,
  LogoImage,
  RemoveShoppingBag,
  RemoveShoppingBagContainer,
  ShoppingBagContainer,
  ShoppingBagIcon,
} from "./Header.style";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <LogoContainer>
          <LogoImage className="header-logo" src={Logo} alt="Logo M3" />
        </LogoContainer>

        <ShoppingBagContainer>
          <ShoppingBagIcon src={ShoppingBag} alt="Shopping-Bag" />
          <CounterShoppingBagContainer>
            <CounterShoppingBag>0</CounterShoppingBag>
          </CounterShoppingBagContainer>
          {/*abaixo onclick="removeItem()" */}
          <RemoveShoppingBagContainer>
            <RemoveShoppingBag>-</RemoveShoppingBag>
          </RemoveShoppingBagContainer>
        </ShoppingBagContainer>
      </HeaderStyled>
    </>
  );
};

export default Header;
