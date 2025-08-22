import { Task } from '../../types/type';
import TaskListWrapper from './TaskListWrapper';

type TaskHandler = (id: number) => void;

type CompletedTaskListProps = {
  completedTasks: Task[];
  archiveTask: TaskHandler;
  completeTask: TaskHandler;
};

const CompletedTaskList = ({
  completedTasks,
  archiveTask,
  completeTask,
}: CompletedTaskListProps): JSX.Element => (
  <TaskListWrapper
    tasks={completedTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    emptyMessage="No completed tasks yet."
    listClassName="completed-task-list"
  />
);

export default CompletedTaskList;
