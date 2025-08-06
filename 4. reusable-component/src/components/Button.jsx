const Button = ({
  text = '',
  icon,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  isDisabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${isDisabled ? 'disabled' : ''} ${
        fullWidth ? 'full-width' : ''
      } `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <span>{icon}</span>}
      {text} {children}
    </button>
  );
};

export default Button;
