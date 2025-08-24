import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate(-1); // повернення на минулу сторінку
      navigate('/', { replace: true }); // replace дозволяє забути минулий шлях
    }, 5000);

    return () => clearInterval(timer);
  }, [navigate]);

  return <div>You will b redirected to the home page in 5 seconds ...</div>;
}
