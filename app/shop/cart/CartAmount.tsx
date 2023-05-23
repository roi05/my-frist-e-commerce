'use client';

import { useCart } from '@/hooks/useAddToCart';
import { addDecimal } from '@/utils/addDecimal';
import Link from 'next/link';

export default function CartAmount() {
  const { addToCart } = useCart();

  const totalAmount = addToCart.reduce((accumulator, item) => {
    const itemTotal = (item.quantity ?? 0) * item.price;
    return accumulator + itemTotal;
  }, 0);

  if (addToCart.length < 1) {
    return null;
  }

  return (
    <>
      <h1 className='text-xl text-center'>Total Amount</h1>

      {addToCart.map(item => {
        return (
          <div
            key={item.id}
            className='mb-2'>
            <p className='text-md'>
              {item.name} - ₱{addDecimal(item.price * (item.quantity ?? 0))}
            </p>
          </div>
        );
      })}

      <hr className='border-b-2 mb-2' />
      <h1 className='text-2xl text-center '>₱{addDecimal(totalAmount)}</h1>
      <Link href='/congratulations'>
        <button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded'>
          Checkout
        </button>
      </Link>
    </>
  );
}
