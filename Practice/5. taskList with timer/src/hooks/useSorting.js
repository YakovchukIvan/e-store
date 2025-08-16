import { useState } from 'react';

// hooks/useSorting.js
export const useSorting = () => {
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  return { sortType, sortOrder, toggleSortOrder };
};
