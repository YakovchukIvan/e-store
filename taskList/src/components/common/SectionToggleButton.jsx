const SectionToggleButton = ({ section, toggleSection, openSection }) => (
  <button
    onClick={() => toggleSection(section)}
    className={`close-button ${openSection[section] ? 'open' : ''}`}
  >
    +
  </button>
);

export default SectionToggleButton;
