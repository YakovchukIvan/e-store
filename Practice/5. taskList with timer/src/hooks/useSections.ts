import { useState } from 'react';
import { INITIAL_SECTIONS, Sections } from '../constants/initialStates';

type UseSectionsResult = {
  openSection: Sections;
  toggleSection: (section: keyof Sections) => void;
};

export const useSections = (): UseSectionsResult => {
  const [openSection, setOpenSection] = useState<Sections>(INITIAL_SECTIONS);

  const toggleSection = (section: keyof Sections) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return { openSection, toggleSection };
};
