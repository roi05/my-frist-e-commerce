import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../app/favicon.ico';
import Notification from './Notification';

export default function Navbar() {
  return (
    <header className='flex items-center justify-between bg-gray-900 text-white p-4  mb-10'>
      <div className='flex items-center'>
        <Link href='/'>
          <Image
            className='w-8 h-8 mr-8'
            src={logo}
            alt='Logo'
          />
        </Link>
        <Link href='/shop'>
          <h1 className='text-xl font-bold'>My Ecommerce App</h1>
        </Link>
      </div>
      <Link href='/shop/cart'>
        <div className=' hover:bg-gray-50 hover:bg-opacity-20 p-2 rounded-full cursor-pointer'>
          <div className='relative '>
            <AiOutlineShoppingCart size={25} />

            <Notification />
          </div>
        </div>
      </Link>
    </header>
  );
}
