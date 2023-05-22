'use client';

import { useCart } from '@/hooks/useAddToCart';

export default function CartAmount() {
  const { addToCart } = useCart();

  const totalAmount = addToCart.reduce((accumulator, item) => {
    const itemTotal = (item.quantity ?? 0) * item.price;
    return accumulator + itemTotal;
  }, 0);

  return (
    <>
      <h1 className='text-xl text-center'>Total Amount</h1>

      {addToCart.map(item => {
        return (
          <div
            key={item.id}
            className='mb-2'>
            <p className='text-md'>
              {item.name} - ₱{item.price * (item.quantity ?? 0)}
            </p>
          </div>
        );
      })}

      <hr className='border-b-2 mb-2' />
      <h1 className='text-2xl text-center'>₱{totalAmount}</h1>
    </>
  );
}
