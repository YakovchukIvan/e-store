import React from 'react';
import { Task } from '../../types';
import TaskListWrapper from './TaskListWrapper';

interface TaskListProps {
  activeTasks: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
  dateTimer: Date;
}

const TaskList: React.FC<TaskListProps> = ({
  activeTasks,
  archiveTask,
  completeTask,
  dateTimer,
}) => (
  <TaskListWrapper
    tasks={activeTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    dateTimer={dateTimer}
    emptyMessage="No active tasks yet."
    listClassName="task-list"
  />
);

export default TaskList;
