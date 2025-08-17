import React from 'react';
import { Task } from '../../types';
import TaskItem from './TaskItem';

interface TaskListWrapperProps {
  tasks?: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
  deleteTask?: ((id: number) => void) | null | undefined;
  emptyMessage: string;
  listClassName?: string;
  dateTimer?: Date;
}

const TaskListWrapper: React.FC<TaskListWrapperProps> = ({
  tasks = [],
  archiveTask,
  completeTask,
  deleteTask = null,
  emptyMessage,
  listClassName,
  dateTimer,
}) => {
  return tasks.length === 0 ? (
    <p className="empty-list-message">{emptyMessage}</p>
  ) : (
    <ul className={listClassName}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          archiveTask={archiveTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
          isOverdue={dateTimer ? new Date(task.deadline) < dateTimer : false}
        />
      ))}
    </ul>
  );
};

export default TaskListWrapper;
