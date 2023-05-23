'use client';

import Image from 'next/image';
import { useCart } from '@/hooks/useAddToCart';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { addDecimal } from '@/utils/addDecimal';

export default function CartList() {
  const { addToCart, setAddToCart } = useCart();

  const addQuantity = (id: number) => {
    const newData = addToCart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            item?.quantity !== undefined ? item.quantity + 1 : undefined,
        };
      }
      return item;
    });

    setAddToCart(newData);
  };

  const subtractQuantity = (id: number) => {
    const newData = addToCart.map(item => {
      if (item.quantity === undefined || item.quantity <= 1) return item;

      if (item.id === id) {
        return {
          ...item,
          quantity:
            item?.quantity !== undefined ? item.quantity - 1 : undefined,
        };
      }
      return item;
    });

    setAddToCart(newData);
  };

  const removeFromCart = (id: number) => {
    const newData = addToCart.filter(item => item.id !== id);
    setAddToCart(newData);
  };

  if (addToCart.length <= 0) {
    return <h1 className='text-2xl font-bold text-center'>No item</h1>;
  }

  return (
    <>
      {addToCart.map(item => {
        return (
          <div
            key={item.id}
            className='bg-slate-100 rounded-md p-2 mb-3'>


            <div className='sm:grid  gap-1 sm:grid-cols-3 sm:justify-center items-center'>
              <div className='relative h-36  sm:col-span-1 flex justify-center items-center'>
                <Image
                  src={item.image}
                  fill
                  alt={item.name}
                  className='rounded-lg object-contain'
                />
              </div>
              <div className='sm:col-span-2  sm:text-left'>
                <h1 className='text-xl font-bold'>{item.name}</h1>
                <p className='text-xs'>{item.desc}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 justify-center items-center my-2'>
              <p className='my-2 text-center'>₱{addDecimal(item.price)}</p>
              <div className='flex items-center justify-center'>
                <div className='flex items-center gap-1'>
                  <AiOutlineMinus
                    className='cursor-pointer'
                    onClick={() => subtractQuantity(item.id)}
                  />
                  <input
                    type='number'
                    value={item.quantity}
                    className='w-12 text-center'
                    readOnly
                  />
                  <AiOutlinePlus
                    className='cursor-pointer'
                    onClick={() => addQuantity(item.id)}
                  />
                </div>
              </div>
            </div>

            <p className='my-2'>
              Total amount:{' '}
              {addDecimal(
                item.quantity !== undefined ? item.price * item.quantity : 0
              )}
            </p>

            <button
              type='button'
              onClick={() => removeFromCart(item.id)}
              className='block mx-auto my-2'>
              <BsFillTrashFill
                color='red'
                size={25}
              />
            </button>
          </div>
        );
      })}
    </>
  );
}
