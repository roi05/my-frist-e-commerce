'use client';
import { useCart } from '@/hooks/useAddToCart';

export default function Notification() {
  const { addToCart } = useCart();
  return (
    <div className='absolute bottom-4 left-5 w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full text-sm'>
      {addToCart.length}
    </div>
  );
}
