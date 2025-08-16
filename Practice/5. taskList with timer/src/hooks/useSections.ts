import { useState } from 'react';
import { INITIAL_SECTIONS } from '../constants/initialStates';

export const useSections = () => {
  const [openSection, setOpenSection] = useState(INITIAL_SECTIONS);

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return { openSection, toggleSection };
};
