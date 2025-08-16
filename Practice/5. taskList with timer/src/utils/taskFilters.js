export const isActiveTask = (task) => !task.completed && !task.archived;
export const isCompletedTask = (task) => task.completed && !task.archived;
export const isArchivedTask = (task) => task.archived;
