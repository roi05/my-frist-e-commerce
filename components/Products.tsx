import Product from './Product/Product/Product';
import data from '../data.json';

export default function Products() {
  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {data.map(product => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
