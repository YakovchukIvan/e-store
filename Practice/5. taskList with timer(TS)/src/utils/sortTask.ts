import { SortOrder, SortType, Task } from '../types';

export const sortTask = (tasks: Task[], sortType: SortType, sortOrder: SortOrder): Task[] => {
  return tasks.slice().sort((a: Task, b: Task) => {
    if (sortType === 'priority') {
      const priorityOrder: Record<'High' | 'Medium' | 'Low', number> = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      // Використовуємо type assertion
      const aPriority = a.priority as 'High' | 'Medium' | 'Low';
      const bPriority = b.priority as 'High' | 'Medium' | 'Low';

      return sortOrder === 'asc'
        ? priorityOrder[aPriority] - priorityOrder[bPriority]
        : priorityOrder[bPriority] - priorityOrder[aPriority];
    } else if (sortType === 'deadline' || sortType === 'date') {
      return sortOrder === 'asc'
        ? new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        : new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    }
    return 0;
  });
};
