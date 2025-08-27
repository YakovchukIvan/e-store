import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    navigate('/', { replace: true, state: { user: true } });
  };

  const handleForgot = (): void => {
    navigate('/', { replace: true, state: { user: false } });
  };

  return (
    <div className="login">
      <p>Login Page</p>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleForgot}>Forgot login data</button>
    </div>
  );
};

export default LoginPage;
