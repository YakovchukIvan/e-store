import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>Header</header>
      <hr />
      <nav>
        <NavLink style={{ marginRight: '20px' }} to="/">
          Home Page
        </NavLink>
        <NavLink style={{ marginRight: '20px' }} to="/products">
          Products
        </NavLink>
        <NavLink style={{ marginRight: '20px' }} to="/about">
          About
        </NavLink>
        <NavLink style={{ marginRight: '20px' }} to="/search">
          Search Page
        </NavLink>
        <NavLink style={{ marginRight: '20px' }} to="/login">
          Login Page
        </NavLink>
      </nav>
      <hr style={{ marginBottom: '200px' }} />
    </div>
  );
}

export default Header;
