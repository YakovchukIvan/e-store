import { ButtonProps } from '../types';

export default function Button({ children, variant, handleClick }: ButtonProps) {
  return (
    <button className={variant} onClick={handleClick}>
      {children}
    </button>
  );
}
