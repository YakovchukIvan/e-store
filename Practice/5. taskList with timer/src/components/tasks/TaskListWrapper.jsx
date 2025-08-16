import TaskItem from './TaskItem';

const TaskListWrapper = ({
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
          isOverdue={new Date(task.deadline) < dateTimer}
        />
      ))}
    </ul>
  );
};

export default TaskListWrapper;
