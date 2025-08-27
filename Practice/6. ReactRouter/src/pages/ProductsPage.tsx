import { Link } from 'react-router-dom';
import { products } from '../data/data';

function ProductsPage() {
  return (
    <div>
      <p>Products Page</p>
      <ul className="categories">
        {products.map((product) => (
          <li className="category-item" key={product.id}>
            <Link to={`/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
