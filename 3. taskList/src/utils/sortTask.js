export const sortTask = (tasks, sortType, sortOrder) => {
  return tasks.slice().sort((a, b) => {
    if (sortType === 'priority') {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return sortOrder === 'asc'
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      return sortOrder === 'asc'
        ? new Date(a.deadline) - new Date(b.deadline)
        : new Date(b.deadline) - new Date(a.deadline);
    }
  });
};
