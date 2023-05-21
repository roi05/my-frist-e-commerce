'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

export type AddToCart = {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
  quantity?: number;
};

type Props = {
  children: React.ReactNode;
};

export type CartContextValue = {
  addToCart: AddToCart[];
  setAddToCart: Dispatch<SetStateAction<AddToCart[]>>;
};

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

export default function CartContextProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<AddToCart[]>([]);

  return (
    <CartContext.Provider
      value={{ addToCart: cartItems, setAddToCart: setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
