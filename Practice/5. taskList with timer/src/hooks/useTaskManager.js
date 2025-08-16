import { useState } from 'react';
import { defaultTasks } from '../data/defaulTasks';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const toggleArchiveTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, archived: !task.archived } : task)),
    );
  };

  const deleteTask = (id) => {
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
