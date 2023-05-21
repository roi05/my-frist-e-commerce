'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl mx-auto p-6'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold text-center text-gray-800 mb-8'>
          Welcome to E-commerce Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg text-center text-gray-600 mb-12'>
          Where Trends Come Alive! Discover the hottest products and stay ahead
          of the curve in the world of online shopping.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex justify-center'>
          <Link href='/shop'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center transition-colors duration-300'>
              Shop Now
              <FaArrowRight className='ml-2' />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
