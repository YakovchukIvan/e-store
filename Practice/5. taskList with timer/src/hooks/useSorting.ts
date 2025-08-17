import { useState } from 'react';
import { SortOrder, SortType } from '../types';

export const useSorting = () => {
  const [sortType, setSortType] = useState<SortType>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const toggleSortOrder = (type: SortType) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  return { sortType, sortOrder, toggleSortOrder };
};
