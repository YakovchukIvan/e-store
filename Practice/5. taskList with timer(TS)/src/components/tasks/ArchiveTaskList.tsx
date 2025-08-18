import React from 'react';
import { Task } from '../../types';
import TaskListWrapper from './TaskListWrapper';

interface ArchiveTaskListProps {
  archiveTasksList: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
  deleteTask?: ((id: number) => void) | null;
}

const ArchiveTaskList: React.FC<ArchiveTaskListProps> = ({
  archiveTasksList,
  archiveTask,
  completeTask,
  deleteTask,
}) => (
  <TaskListWrapper
    tasks={archiveTasksList}
    archiveTask={archiveTask}
    completeTask={completeTask}
    deleteTask={deleteTask}
    emptyMessage="No archived tasks yet."
    listClassName="archive-task-list"
  />
);

export default ArchiveTaskList;
