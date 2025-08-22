import { Sections } from '../../types/type';

type SectionToggleButtonProps = {
  section: Sections;
  toggleSection: (section: Sections) => void;
  openSection: Record<Sections, boolean>;
};

const SectionToggleButton = ({ section, toggleSection, openSection }: SectionToggleButtonProps) => (
  <button
    onClick={() => toggleSection(section)}
    className={`close-button ${openSection[section] ? 'open' : ''}`}
  >
    +
  </button>
);

export default SectionToggleButton;
