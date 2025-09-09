export type TPriority = 'High' | 'Medium' | 'Low';

export interface ITask {
  id: number;
  title: string;
  description?: string;
  deadline: string;
  priority: TPriority;
  completed: boolean;
}

export interface IOpenSection {
  taskList: boolean;
  tasks: boolean;
  completedTasks: boolean;
}

export interface ITaskItemProps {
  task: ITask;
  deleteTask: (id: number) => void;
  completeTask?: (id: number) => void;
  isOverdue?: boolean;
}

export interface ITaskContextType {
  addTask: (task: Omit<ITask, 'id' | 'completed'>) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
  activeTasks: ITask[];
  completedTasks: ITask[];
  currentTime: Date;
}
