export type Task = {
  id: number;
  title: string;
  completed: boolean;
  archived?: boolean;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
};

export type Sections = 'taskList' | 'tasks' | 'completedTasks' | 'archiveTasks';

export type SortType = 'priority' | 'date';
export type SortOrder = 'asc' | 'desc';

export type SortControlsProps = {
  sortType: SortType;
  sortOrder: SortOrder;
  toggleSortOrder: (type: SortType) => void;
};

export type TaskFormData = {
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  deadline: string;
};
