import { createContext, useState } from "react";

interface CartContextData {
 quantity: number;
  addToCart: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export const CartProvider = ({children}: any) => {
  const [quantity, setQuantity] = useState<number>(0);

  const addToCart = () => {
    setQuantity((prevState: number) => prevState + 1);
  }

  return (
    <CartContext.Provider
      value={{
        quantity,
        addToCart
      }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;