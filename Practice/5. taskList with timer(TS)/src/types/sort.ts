export type SortType = 'priority' | 'deadline' | 'date';
export type SortOrder = 'asc' | 'desc';

export interface SortControlsProps {
  sortType: SortType;
  sortOrder: SortOrder;
  toggleSortOrder: (type: SortType) => void;
}
