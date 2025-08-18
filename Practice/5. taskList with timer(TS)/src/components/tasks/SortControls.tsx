import { SortControlsProps } from '../../types';

const SortControls = ({ sortType, sortOrder, toggleSortOrder }: SortControlsProps) => {
  return (
    <div className="sort-controls">
      <button
        className={`sort-button ${sortType === 'date' ? 'active' : ''}`}
        onClick={() => toggleSortOrder('date')}
      >
        By Date {sortType === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
      </button>
      <button
        className={`sort-button ${sortType === 'priority' ? 'active' : ''}`}
        onClick={() => toggleSortOrder('priority')}
      >
        By Priority {sortType === 'priority' && (sortOrder === 'asc' ? '↑' : '↓')}
      </button>
    </div>
  );
};

export default SortControls;
