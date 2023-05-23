import CartList from './CartList';
import CartAmount from './CartAmount';

export default function Cart() {
  return (
    <div className='mx-auto w-11/12 lg:grid lg:grid-cols-6'>
      <div className='lg:col-span-4'>
        <CartList />
      </div>
      <div className='lg:col-span-2 lg:ml-2'>
        <CartAmount />
      </div>
    </div>
  );
}
