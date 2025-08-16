import { useEffect } from 'react';

export const useOverdueTasks = (dateTimer: any, tasks: any, setTasks: any) => {
  useEffect(() => {
    if (!dateTimer || !tasks.length) return;

    setTasks((prevTasks: any) =>
      prevTasks.map((task: any) => {
        if (task.deadline < dateTimer && !task.overdue) {
          return { ...task, overdue: true };
        }
        return task;
      }),
    );
  }, [dateTimer, tasks.length, setTasks]);
};
