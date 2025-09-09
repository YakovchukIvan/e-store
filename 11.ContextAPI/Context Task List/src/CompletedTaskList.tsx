import TaskItem from './TaskItem';
import { useTasks } from './useTasks';

export default function CompletedTaskList() {
  const { completedTasks, deleteTask } = useTasks();

  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
