import { Task } from '../../types/type';
import TaskListWrapper from './TaskListWrapper';

type TaskHandler = (id: number) => void;

type ArchiveTaskListProps = {
  archiveTasksList: Task[];
  archiveTask: TaskHandler;
  completeTask: TaskHandler;
  deleteTask: TaskHandler;
};

const ArchiveTaskList = ({
  archiveTasksList,
  archiveTask,
  completeTask,
  deleteTask,
}: ArchiveTaskListProps): JSX.Element => (
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
