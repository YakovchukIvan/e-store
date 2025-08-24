import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';
import { Product } from '../types';

interface RouteParams extends Record<string, string | undefined> {
  categoryId: string;
}

export default function Category() {
  const { categoryId } = useParams<RouteParams>();

  const currentCategoryArray: Product[] = products.filter(
    (product) => product.categoryId === categoryId,
  );

  return (
    <div className="category">
      <h2>Category page</h2>
      <ul className="categories">
        {currentCategoryArray.map((category) => (
          <li className="category-item" key={category.id}>
            <Link to={`/product/${category.id}`}>
              <span> {category.name}</span>
              <img src={category.img} alt={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
