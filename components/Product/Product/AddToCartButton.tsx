'use client';

import { BsCartPlus } from 'react-icons/bs';
import { useCart } from '@/hooks/useAddToCart';
import { AddToCart } from '@/context/addToCart';

type Props = {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  name,
  desc,
  price,
  image,
}: Props) {
  const { addToCart, setAddToCart } = useCart();

  const addItemToCart = (item: number) => {
    const existingItem = addToCart?.find(
      (cartItem: AddToCart) => cartItem.id === item
    );

    if (existingItem) {
      const updatedCartItems = addToCart?.map((cartItem: AddToCart) => {
        if (cartItem.id === item) {
          const quantity = cartItem.quantity || 0;
          return { ...cartItem, quantity: quantity + 1 };
        }
        return cartItem;
      });

      setAddToCart(updatedCartItems);
    } else {
      setAddToCart([
        ...addToCart,
        { id: item, quantity: 1, name, desc, price, image },
      ]);
    }
  };

  return (
    <div
      className='rounded-full p-5 hover:bg-slate-100'
      onClick={() => addItemToCart(id)}>
      <BsCartPlus
        size={20}
        className='cursor-pointer  '
      />
    </div>
  );
}
