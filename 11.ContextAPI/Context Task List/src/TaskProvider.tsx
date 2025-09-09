import { createContext, ReactNode, useEffect, useState } from 'react';
import { IOpenSection, TPriority, ITask } from './types';

interface TaskContextType {
  tasks: ITask[];
  activeTasks: ITask[];
  completedTasks: ITask[];
  openSection: IOpenSection;
  currentTime: Date;
  toggleSection: (section: keyof IOpenSection) => void;
  addTask: (task: Omit<ITask, 'id' | 'completed'>) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  toggleSortOrder: (type: 'date' | 'priority') => void;
  sortType: 'date' | 'priority';
  sortOrder: 'asc' | 'desc';
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [sortType, setSortType] = useState<'date' | 'priority'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [openSection, setOpenSection] = useState<IOpenSection>({
    taskList: false,
    tasks: true,
    completedTasks: true,
  });
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSection = (section: keyof IOpenSection) => {
    setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const addTask = (task: Omit<ITask, 'id' | 'completed'>) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
  };

  const sortTask = (tasksToSort: ITask[]): ITask[] => {
    return tasksToSort.slice().sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder: Record<TPriority, number> = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === 'asc'
          ? new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          : new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      }
    });
  };

  const toggleSortOrder = (type: 'date' | 'priority') => {
    if (sortType === type) setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const activeTasks = sortTask(tasks.filter((task) => !task.completed));
  const completedTasks = sortTask(tasks.filter((task) => task.completed));

  return (
    <TaskContext.Provider
      value={{
        tasks,
        activeTasks,
        completedTasks,
        openSection,
        currentTime,
        toggleSection,
        addTask,
        deleteTask,
        completeTask,
        toggleSortOrder,
        sortType,
        sortOrder,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
