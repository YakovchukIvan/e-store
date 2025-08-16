import { useEffect, useState } from 'react';

export const useDateTime = () => {
  const [dateTimer, setDateTimer] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTimer(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { dateTimer };
};
