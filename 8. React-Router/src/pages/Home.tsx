import { Link } from 'react-router-dom';
import { categories } from '../data/data';

export default function Home() {
  return (
    <div className="home">
      <h1>Categories</h1>
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
