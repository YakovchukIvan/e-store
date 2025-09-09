import TaskItem from './TaskItem';
import { useTasks } from './useTasks';

export default function TaskList() {
  const { activeTasks, deleteTask, completeTask, currentTime } = useTasks();

  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
          key={task.id}
          isOverdue={new Date(task.deadline) < currentTime}
        />
      ))}
    </ul>
  );
}
