import { FC } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/data';
import { Category } from '../types/types';

const Home: FC = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20">
      <h1 className="mb-8 text-2xl font-semibold text-center ">Categories</h1>
      <ul className="grid grid-cols-3 gap-4 px-5">
        {categories.map((category: Category) => (
          <li key={category.id}>
            <Link
              className="relative flex items-center justify-center group"
              to={`/category/${category.name}`}
            >
              <span className="absolute z-10 text-xl font-semibold text-white transition duration-1000 ease-out group-hover:text-red-500 group-hover:text-2xl animate-wiggle">
                {category.name}
              </span>
              <img className="rounded-lg " src={category.img} alt={category.name} />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900 via-gray-700 to-sky-400 via-30% bg-gray-950 opacity-40"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
