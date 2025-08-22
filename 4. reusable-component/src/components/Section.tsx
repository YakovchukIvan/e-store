import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  title: string;
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="component-group">
      <h2>{title}</h2>
      <div className="component-card">{children}</div>
    </section>
  );
};

export default Section;
