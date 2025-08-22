import { useState, useEffect } from 'react';

// Типізуємо аргументи хука та його повертаєме значення
export default function useWindowSize(minWidth: number, maxWidth: number): boolean {
  const [isWithinRange, setIsWithinRange] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsWithinRange(width >= minWidth && width <= maxWidth);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [minWidth, maxWidth]);

  return isWithinRange;
}
