import { Task } from '../../types/type';
import TaskItem from './TaskItem';

type TaskListWrapperProps = {
  tasks?: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
  deleteTask?: ((id: number) => void) | null;
  emptyMessage: string;
  listClassName?: string;
};

const TaskListWrapper = ({
  tasks = [],
  archiveTask,
  completeTask,
  deleteTask = null,
  emptyMessage,
  listClassName = '',
}: TaskListWrapperProps): JSX.Element => {
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
        />
      ))}
    </ul>
  );
};

export default TaskListWrapper;
