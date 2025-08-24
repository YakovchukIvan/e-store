import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { products } from '../data/data';
import { Product, RouteParams } from '../types';

export default function Category() {
  const { categoryId } = useParams<RouteParams>();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const maxPrice =
    location.state?.maxPrice ??
    (searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : Infinity);

  const currentCategoryArray: Product[] = products.filter(
    (product) => product.categoryId === categoryId && product.price <= Number(maxPrice),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  };

  return (
    <div className="category">
      <h2>Category page</h2>
      <div>
        <label htmlFor="maxPrice"></label>
        <input
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          onChange={handleChange}
          value={searchParams.get('maxPrice') ?? ''}
        />
      </div>
      <ul className="categories">
        {currentCategoryArray.map((category) => (
          <li className="category-item" key={category.id}>
            <Link to={`/product/${category.id}`}>
              <span> {category.name}</span>
              <img src={category.img} alt={category.name} />
              <h4>Price {category.price} $</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
