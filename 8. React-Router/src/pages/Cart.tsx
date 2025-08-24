import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {/* <Link to="/thanks">
        <button>ORDER</button>
      </Link> */}
      <button onClick={() => navigate('/thanks')}>ORDER</button>
    </div>
  );
}
