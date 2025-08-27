import { FC } from 'react';
import { Link, useLocation, Location } from 'react-router-dom';
import { categories } from '../data/data';
import { Category } from '../types/types';

const Home: FC = () => {
  const location: Location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Categories</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <Link to={`/category/${category.name}`}>
              {category.name}
              <img src={category.img} alt={category.name} style={{ width: '150px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
