import { Link } from 'react-router-dom';

const styleLink: React.CSSProperties = {
  marginRight: '20px',
  fontSize: '20px',
  color: 'rgba(37, 146, 150, 1) ',
  fontWeight: '600',
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <Link to={'/'} style={styleLink}>
        Home
      </Link>
      <Link to={'/about'} style={styleLink}>
        About
      </Link>
      <Link to={'/cart'} style={styleLink}>
        Cart
      </Link>
      <Link to={'/categories'} style={styleLink}>
        Categories
      </Link>
      <Link to={'/product'} style={styleLink}>
        Product
      </Link>
    </div>
  );
}
