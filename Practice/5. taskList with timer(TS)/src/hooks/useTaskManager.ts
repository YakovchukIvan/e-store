import { useState } from 'react';
import { defaultTasks } from '../data/defaulTasks';
import { Task, TaskFormData } from '../types';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const addTask = (task: TaskFormData) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };

  const completeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const toggleArchiveTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, archived: !task.archived } : task)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    setTasks,
    addTask,
    completeTask,
    toggleArchiveTask,
    deleteTask,
  };
};
