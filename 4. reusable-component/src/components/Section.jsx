import Button from './Button';

const Section = ({ handleClick }) => {
  return (
    <section className="component-group">
      <h2>Sizes</h2>
      <div className="component-card">
        <Button onClick={handleClick}>Hello children prop</Button>
      </div>
    </section>
  );
};

export default Section;
