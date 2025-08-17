export interface Task {
  id: number;
  title: string;
  priority: string;
  deadline: string;
  completed: boolean;
  archived?: boolean;
}

export interface TaskFormData {
  title: string;
  priority: string;
  deadline: string;
}

export interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}
