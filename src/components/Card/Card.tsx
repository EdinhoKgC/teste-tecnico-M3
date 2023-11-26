import { formatoReal } from "../../utils";
import {
  ButtonBuy,
  ButtonContainer,
  CardContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  ProductInstallment,
  ProductName,
  ProductPrice,
} from "./Card.style";

interface CardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    parcelamento: number[];
  };
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={`${product.image}`} alt={product.name}></CardImage>
      </CardImageContainer>

      <CardInfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatoReal(product.price)}</ProductPrice>
        <ProductInstallment>
          até {product.parcelamento[0]}x de $
          {formatoReal(product.parcelamento[1])}
        </ProductInstallment>
      </CardInfoContainer>

      <ButtonContainer>
        <ButtonBuy key={product.id} type="button">
          COMPRAR
        </ButtonBuy>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
