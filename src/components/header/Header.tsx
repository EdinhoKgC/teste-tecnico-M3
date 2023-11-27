import Logo from "../../assets/img/logo-m3.png";
import ShoppingBag from "../../assets/img/shopping-bag-icon.png";
import { useCart } from "../../hooks/useCart";
import {
  CounterShoppingBag,
  CounterShoppingBagContainer,
  HeaderStyled,
  LogoContainer,
  LogoImage,
  ShoppingBagContainer,
  ShoppingBagIcon,
} from "./Header.style";

const Header = () => {
  const { quantity } = useCart();
  return (
    <>
      <HeaderStyled>
        <LogoContainer>
          <LogoImage src={Logo} alt="Logo M3" />
        </LogoContainer>

        <ShoppingBagContainer>
          <ShoppingBagIcon src={ShoppingBag} alt="Shopping-Bag" />
          <CounterShoppingBagContainer>
            <CounterShoppingBag>{quantity}</CounterShoppingBag>
          </CounterShoppingBagContainer>
        </ShoppingBagContainer>
      </HeaderStyled>
    </>
  );
};

export default Header;
