import { FC, ChangeEvent } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { products } from '../data/data';
import { Product } from '../types/types';

const Category: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;

  const currentCategoryArray: Product[] = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  };

  return (
    <div className="p-10 m-auto">
      <h1 className="mb-8 text-4xl text-center">Category {categoryId}</h1>
      <div className="mb-20">
        <label className="pr-4 text-lg" htmlFor="maxPrice">
          Max Price:
        </label>
        <input
          className="p-2 text-xl rounded-lg"
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          value={searchParams.get('maxPrice') || ''}
          onChange={handleChange}
        />
      </div>
      <ul className="flex justify-start gap-8 p-0 m-0 list-none">
        {currentCategoryArray.map((product: Product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <span className="text-lg ">
                {product.name} {product.price}$
              </span>
              <img src={product.img} alt={product.name} className="mt-4 rounded-xl min-w-40" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
