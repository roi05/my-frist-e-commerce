import CartList from './CartList';
import CartAmount from './CartAmount';

export default function Cart() {
  return (
    <div className='grid grid-cols-4 p-5 gap-x-8'>
      <div className='col-span-3'>
        <CartList />
      </div>
      <div className='col-span-1'>
        <CartAmount />
      </div>
    </div>
  );
}
