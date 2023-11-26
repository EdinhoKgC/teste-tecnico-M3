import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  height: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardImageContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.button`
  width: 100%;
`;

export const ButtonBuy = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  font-weight: bold;
  color: #fff;
  border: none;
  background: #000000;
  cursor: pointer;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const ProductName = styled.h4`
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
`;

export const ProductPrice = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const ProductInstallment = styled.p`
  margin-top: 5px;
  font-size: 16px;
`;