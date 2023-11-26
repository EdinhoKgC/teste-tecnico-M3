import styled from "styled-components";

export const MainSectionStyled = styled.main`
  width: 100%;
  height: 100%;
`;

export const MainSectionContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  font-weight: 300;

  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 150vh;
    right: 100vh;
    background-color: white;
    transition: all 0.1s ease;
  }
`;

export const SortContainerButton = styled.div`
  position: relative;
  top: 20px;
  right: 100px;
  height: 100%;
  width: 130px;
  @media (max-width: 600px) {
    width: 100%;
    position: initial;
  }
`;

export const SortMobileContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid rgb(165, 165, 165);
    padding: 10px;
  }
`;

export const SortMobileTitle = styled.p`
  color: #333;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 25px;
`;

export const SortMobileCloseButton = styled.h3`
  color: #333;
  font-size: 25px;
  font-weight: bold;
`;

export const SortContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #808080;
  height: 42px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SortSelectTitle = styled.p``;

export const SortArrowDropDown = styled.img`
  width: 12px;
  height: 9px;
`;

export const MobileFilterContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const MobileCategoryTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const MobileFilterButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

export const MobileFilterButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: #808080;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 20px;
  border: 1px solid #808080;
  background-color: #fff;
`;

export const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-gap: 200px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 90vh;
  margin-left: 10px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    width: 100%;
    grid-gap: 80px;
    grid-template-columns: repeat(3, 90px);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 60px);
    grid-gap: 50px;
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const ShowMoreButton = styled.button`
  width: 175px;
  height: 35px;
  border: none;
  font-weight: bold;
  color: #fff;
  background-color: #00c0ee;
  cursor: pointer;
`;
