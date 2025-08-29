import { Link } from 'react-router-dom';
import CustomNavLink from '../UI/NavLink';

function Header() {
  return (
    <header className="flex justify-between p-10 bg-blue-200 shadow-md">
      <Link to="/">
        <img className="h-8" src="/logo.svg" alt="" />
      </Link>
      <nav>
        <ul className="flex gap-x-10">
          <li>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/about">About</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/cart">Cart</CustomNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
