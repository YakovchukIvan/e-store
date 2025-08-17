import React from 'react';
import { Sections } from '../../constants/initialStates';

// Типізація пропсів
interface SectionToggleButtonProps {
  section: keyof Sections;
  toggleSection: (section: keyof Sections) => void;
  openSection: Sections;
}

const SectionToggleButton: React.FC<SectionToggleButtonProps> = ({
  section,
  toggleSection,
  openSection,
}) => (
  <button
    onClick={() => toggleSection(section)}
    className={`close-button ${openSection[section] ? 'open' : ''}`}
  >
    +
  </button>
);

export default SectionToggleButton;
