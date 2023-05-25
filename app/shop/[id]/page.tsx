type PropTypes = {
  params: {
    id: string;
  };
};

import data from '../../../data.json';
import Image from 'next/image';
import { addDecimal } from '@/utils/addDecimal';
import Button from './Button';

export const dynamicParams = false;

export async function generateStaticParams() {
  return data.map(post => ({
    id: post.id.toString(),
  }));
}

export default async function IndividualPage({ params }: PropTypes) {
  const { id } = params;

  const product = await data.find(post => post.id === parseInt(id));

  if (!product) {
    return;
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='flex flex-col md:flex-row'>
        <div className='relative h-64 md:w-1/2'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-contain'
          />
        </div>
        <div className='md:w-1/2 md:ml-8 mt-4 md:mt-0'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <p className='text-gray-600 my-4'>{product.desc}</p>
          <p className='text-2xl font-bold text-green-600'>
            ₱{addDecimal(product.price)}
          </p>
          <Button {...product} />
        </div>
      </div>
    </div>
  );
}
