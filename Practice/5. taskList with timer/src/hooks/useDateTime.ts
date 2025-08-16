import { useEffect, useState } from 'react';
// import { formatDateTime } from '../utils/dateUtils';

export const formatDateTime = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const useDateTime = () => {
  const [dateTimer, setDateTimer] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTimer(formatDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { dateTimer };
};
