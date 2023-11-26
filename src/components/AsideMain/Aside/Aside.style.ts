import styled from "styled-components";

export const AsideStyled = styled.aside`
  display: flex;
  height: 100%;
  background-color: transparent;
  width: 22%;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  @media (max-width: 600px) {
    right: 100vw;
    width: 100vw;
    height: 150vh;
    align-items: flex-start;
    position: absolute;
    background-color: white;
    transition: all 0.1s ease;
  }
`;

export const AsideCategoryTitle = styled.h1`
  font-size: 32px;
  margin-top: 25px;
  width: 50%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FilterMobileContainer = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(165, 165, 165);
    width: 100%;
    height: 80px;
    padding: 10px;
  }
`;

export const CloseFilterButton = styled.h2`
  @media (max-width: 600px) {
    color: #333;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const FilterMobileButton = styled.p`
  @media (max-width: 600px) {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 25px;
    color: #333;
  }
`;

export const AsideContainerMobile = styled.div`
  @media (max-width: 600px) {
    margin: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const SectionColorFilter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
`;

export const FilterColorTitle = styled.h3`
  width: 100%;
  margin-right: 20px;
  margin-top: 30px;
  font-size: 16px;
  letter-spacing: 0.8px;
`;

export const ButtonMoreLessContainer = styled.div`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: flex;
    margin-top: 20px;
    width: 30px;
  }
`;

export const MenuMobileContainer = styled.div`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MenuMobileSpanMore1 = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 20px;
  }
`;

export const MenuMobileSpanLess = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: block;
    position: absolute;
    height: 20px;
    transform: rotate(90deg);
  }
`;

export const UnorderedListColors = styled.ul`
  margin-top: 5px;
  width: 100%;
  height: 100%;
`;

export const DropDownColorContainer = styled.div``;
