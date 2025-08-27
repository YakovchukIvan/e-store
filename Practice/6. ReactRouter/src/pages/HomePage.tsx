import { useLocation } from 'react-router-dom';

function HomePage() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Home Page</h1>
      <p>{state?.user ? 'You are logged in' : 'Not logged in'}</p>
    </div>
  );
}

export default HomePage;
