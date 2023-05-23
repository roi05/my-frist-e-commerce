'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CongratulationPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='flex flex-col items-center justify-center h-screen'>
        <motion.h1
          variants={textVariants}
          className='text-4xl font-bold mb-4'>
          Congratulations!
        </motion.h1>
        <motion.p
          variants={textVariants}
          className='text-lg text-gray-700 mb-8'>
          Thank you for your purchase. Enjoy your new item!
        </motion.p>
        <Link href='/shop'>
        <motion.button
          variants={buttonVariants}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Continue Shopping
        </motion.button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
