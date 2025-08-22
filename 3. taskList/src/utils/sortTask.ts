import { SortOrder, SortType, Task } from '../types/type';

export const sortTask = (tasks: Task[], sortType: SortType, sortOrder: SortOrder): Task[] => {
  return tasks.slice().sort((a, b) => {
    if (sortType === 'priority') {
      const priorityOrder: Record<Task['priority'], number> = {
        High: 1,
        Medium: 2,
        Low: 3,
      };
      return sortOrder === 'asc'
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    }
  });
};
