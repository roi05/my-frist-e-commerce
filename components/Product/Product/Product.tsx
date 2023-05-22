import Image from 'next/image';
import AddToCartButton from '@/components/Product/Product/AddToCartButton';

type ProductProps = {
  product: {
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
  };
};

export default function Product({
  product: { id, name, desc, price, image },
}: ProductProps) {
  return (
    <div className='rounded overflow-hidden shadow-lg'>
      <div className='w-5/6 mx-auto'>
        <Image
          width={500}
          height={500}
          className='object-contain'
          src={image}
          alt={name}
        />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-lg mb-3'>{name}</div>
        <p className='text-gray-700 text-xs'>{desc.substring(0, 100)}</p>
      </div>
      <div className='flex justify-between items-center px-6 py-4 mb-6'>
        <div className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          ${price}
        </div>
        <div>
          <AddToCartButton
            id={id}
            name={name}
            price={price}
            desc={desc}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}
