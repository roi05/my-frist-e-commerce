import CartList from './CartList';
import CartAmount from './CartAmount';

export default function Cart() {
  return (
    <div className='grid grid-cols-4 p-5 gap-x-8 w-5/6 mx-auto'>
      <div className='col-span-4 md:col-span-3'>
        <CartList />
      </div>
      <div className='col-span-4 md:col-span-1'>
        <CartAmount />
      </div>
    </div>
  );
}
