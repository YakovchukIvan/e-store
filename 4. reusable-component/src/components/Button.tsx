import { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'gradient' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  text?: string;
  icon?: ReactNode;
};

const Button = ({
  text = '',
  icon,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  isDisabled = false,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${variant} ${size} ${isDisabled ? 'disabled' : ''} ${
        fullWidth ? 'full-width' : ''
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <span>{icon}</span>}
      {text} {children}
    </button>
  );
};

export default Button;
