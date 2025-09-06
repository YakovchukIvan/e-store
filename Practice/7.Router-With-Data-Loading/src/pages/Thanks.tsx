import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Thanks: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer: number = window.setTimeout(() => {
      navigate('/', { state: { maxPrice: 600 } });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div>You will be redirected to the home page in 5 seconds...</div>;
};

export default Thanks;
