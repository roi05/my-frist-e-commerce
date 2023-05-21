'use client';

import Image from 'next/image';
import { useCart } from '@/hooks/useAddToCart';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

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

  return (
    <>
      {addToCart.map(item => {
        return (
          <div
            key={item.id}
            className='grid grid-cols-12 gap-x-4 mb-7 bg-slate-50 p-2'>
            <div className='col-span-3'>
              <Image
                src={item.image}
                width={250}
                height={250}
                alt={item.name}
              />
            </div>
            <div className='col-span-8'>
              <h1 className='text-xl font-bold'>{item.name}</h1>
              <p className='text-xs'>{item.desc}</p>
              <p className='my-2'>₱{item.price}.00</p>

              <div className='my-2'>
                <div className='flex items-center gap-4'>
                  <AiOutlineMinus
                    className='cursor-pointer'
                    onClick={() => subtractQuantity(item.id)}
                  />
                  <input
                    type='number'
                    value={item.quantity}
                    className='w-12'
                  />
                  <AiOutlinePlus
                    className='cursor-pointer'
                    onClick={() => addQuantity(item.id)}
                  />
                </div>
              </div>

              <div className='flex justify-around '>
                <div>
                  <p>
                    Total amount:{' '}
                    {item.quantity !== undefined
                      ? item.price * item.quantity
                      : 0}
                  </p>
                </div>

                <div>
                  <button
                    type='button'
                    onClick={() => removeFromCart(item.id)}>
                    <BsFillTrashFill
                      color='red'
                      size={25}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
