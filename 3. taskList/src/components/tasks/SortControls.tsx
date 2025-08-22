import { SortControlsProps } from '../../types/type';

const SortControls = ({ sortType, sortOrder, toggleSortOrder }: SortControlsProps): JSX.Element => {
  return (
    <div className="sort-controls">
      <button
        className={`sort-button ${sortType === 'date' ? 'active' : ''}`}
        onClick={() => toggleSortOrder('date')}
      >
        By Date {sortType === 'date' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
      </button>
      <button
        className={`sort-button ${sortType === 'priority' ? 'active' : ''}`}
        onClick={() => toggleSortOrder('priority')}
      >
        By Priority {sortType === 'priority' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
      </button>
    </div>
  );
};

export default SortControls;
