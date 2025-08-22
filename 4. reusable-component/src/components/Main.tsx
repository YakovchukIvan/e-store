import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className="component-showcase">{children}</main>;
};
export default Main;
