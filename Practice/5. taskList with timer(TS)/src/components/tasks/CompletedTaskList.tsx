import React from 'react';
import TaskListWrapper from './TaskListWrapper';
import { Task } from '../../types';

interface CompletedTaskListProps {
  completedTasks: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
}

const CompletedTaskList: React.FC<CompletedTaskListProps> = ({
  completedTasks,
  archiveTask,
  completeTask,
}) => (
  <TaskListWrapper
    tasks={completedTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    emptyMessage="No completed tasks yet."
    listClassName="completed-task-list"
  />
);

export default CompletedTaskList;
