import Button from './Button';
import Section from './Section';

const Main = ({ handleClick }) => {
  return (
    <main className="component-showcase">
      <Section handleClick={handleClick}></Section>

      <section className="component-group">
        <h2>Variants</h2>
        <div className="component-card">
          <Button text="Primary" variant="primary" />
          <Button text="Secondary" variant="secondary" />
          <Button text="Danger" variant="danger" />
          <Button text="Gradient" variant="gradient" />
          <Button text="Outline" variant="outline" />
        </div>
      </section>

      <section className="component-group">
        <h2>Sizes</h2>
        <div className="component-card">
          <Button text="Small" variant="primary" size="small" />
          <Button text="Medium" variant="primary" size="medium" />
          <Button text="Large" variant="primary" size="large" />
        </div>
      </section>

      <section className="component-group">
        <h2>Button States</h2>
        <div className="component-card">
          <Button variant="primary">Default</Button>
          <button className="button primary disabled">Disabled</button>
        </div>
      </section>

      <section className="component-group">
        <h2>Full Width Button</h2>
        <div className="component-card">
          <button className="button secondary full-width">Full Width</button>
        </div>
      </section>
    </main>
  );
};
export default Main;
