import styled from "styled-components";

export const HeaderStyled = styled.header`
  border-bottom: 1px solid #c7c7c7;
  display: flex;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

export const LogoImage = styled.img`
  object-fit: cover;
  height: 30px;
`;

export const ShoppingBagContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  position: relative;
`;

export const ShoppingBagIcon = styled.img`
  position: relative;
  top: 10px;
  width: 17px;
  height: 20px;
`;

export const CounterShoppingBagContainer = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  width: 12px;
  height: 13px;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  top: 20px;
  right: -5px;
  position: absolute;
  background-color: $blue;
  border-radius: 100%;
`;

export const CounterShoppingBag = styled.span``;

export const RemoveShoppingBagContainer = styled.div`
  cursor: pointer;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  color: #fff;
  width: 12px;
  height: 12px;
  font-size: 20px;
  font-weight: bold;
  top: 25px;
  left: -9px;
  position: absolute;
  background-color: $gray;
  border-radius: 100%;

  &:hover {
    opacity: 1;
  }
`;

export const RemoveShoppingBag = styled.span`
  font-weight: bold;
  bottom: 1px;
  position: relative;
`;
