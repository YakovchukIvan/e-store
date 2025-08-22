import { Task } from '../../types/type';
import TaskListWrapper from './TaskListWrapper';

type TaskListProps = {
  activeTasks: Task[];
  archiveTask: (id: number) => void;
  completeTask: (id: number) => void;
};

const TaskList = ({ activeTasks, archiveTask, completeTask }: TaskListProps): JSX.Element => (
  <TaskListWrapper
    tasks={activeTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    emptyMessage="No active tasks yet."
    listClassName="task-list"
  />
);

export default TaskList;
