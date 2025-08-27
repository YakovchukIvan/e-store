import { FC, ChangeEvent } from 'react';
import { Link, useLocation, useParams, useSearchParams, Location } from 'react-router-dom';
import { products } from '../data/data';
import { Product } from '../types/types';

interface LocationState {
  maxPrice: number;
}

const Category: FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation() as Location & { state: LocationState };

  const maxPrice = location.state?.maxPrice ?? Infinity; // якщо state немає, беремо без обмежень

  const currentCategoryArray: Product[] = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  };

  return (
    <div>
      <h1>Category {categoryId}</h1>
      <div>
        <label htmlFor="maxPrice">Max Price </label>
        <input
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          value={searchParams.get('maxPrice') || ''}
          onChange={handleChange}
        />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        {currentCategoryArray.map((product: Product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} {product.price}$
              <img src={product.img} alt={product.name} style={{ width: '150px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
