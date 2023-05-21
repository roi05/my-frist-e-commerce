import { useContext } from 'react';
import { CartContext, CartContextValue } from '../context/addToCart';

export const useCart = (): CartContextValue => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return cartContext;
};
