import { FC, ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink
      className={({ isActive }) => (isActive ? 'text-gray-900 font-semibold' : 'text-gray-600')}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
};

export default CustomNavLink;
