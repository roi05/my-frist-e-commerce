'use client';
import { useCart } from '@/hooks/useAddToCart';
import { AddToCart } from '@/context/addToCart';

export type Props = {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
};

export default function Button({ id, name, desc, price, image }: Props) {
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
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'
        onClick={() => addItemToCart(id)}>
        Add to Cart
      </button>
    </>
  );
}
