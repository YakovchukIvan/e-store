import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Instruction from './components/Instruction';
import Section from './components/Section';
import Main from './components/Main';
import Button from './components/Button';
import Footer from './components/Footer';

function App(): JSX.Element {
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  const toggleInstructions = (): void => {
    setShowInstructions((prev) => !prev);
  };

  const handleClick = (): void => {
    alert('Click');
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions} />

      <Instruction showInstructions={showInstructions} />

      <Main>
        <Section title="Variants">
          <Button onClick={handleClick} variant="primary">
            Primary
          </Button>
          <Button onClick={handleClick} variant="secondary">
            Secondary
          </Button>
          <Button onClick={handleClick} variant="danger">
            Danger
          </Button>
          <Button onClick={handleClick} variant="gradient">
            Gradient
          </Button>
          <Button onClick={handleClick} variant="outline">
            Outline
          </Button>
        </Section>

        <Section title="Sizes">
          <Button onClick={handleClick} variant="primary" size="small">
            Small
          </Button>
          <Button onClick={handleClick} variant="primary" size="medium">
            Medium
          </Button>
          <Button onClick={handleClick} variant="primary" size="large">
            Large
          </Button>
        </Section>

        <Section title="Button States">
          <Button onClick={handleClick} variant="primary">
            Default
          </Button>
          <Button onClick={handleClick} variant="primary" isDisabled>
            Disabled
          </Button>
        </Section>

        <Section title="Full Width Button">
          <Button onClick={handleClick} variant="secondary" fullWidth>
            Full Width
          </Button>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
