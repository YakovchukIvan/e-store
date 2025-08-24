import { Link } from 'react-router-dom';
import { categories } from '../data/data';

export default function Home() {
  return (
    <div className="home">
      <h1>Categories</h1>
      <Link to="/category/Electronics" state={{ from: 'Home Page', maxPrice: 600 }}>
        Look at our cheapest electonics
      </Link>
      <ul className="categories">
        {categories.map((category) => (
          <li className="category-item" key={category.id}>
            <Link to={`/category/${category.name}`}>
              <span> {category.name}</span>
              <img src={category.img} alt={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
