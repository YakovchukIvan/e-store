import { Task } from '../types';

export const isActiveTask = (task: Task) => !task.completed && !task.archived;
export const isCompletedTask = (task: Task) => task.completed && !task.archived;
export const isArchivedTask = (task: Task) => !!task.archived;
