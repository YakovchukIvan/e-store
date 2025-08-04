import TaskItem from './TaskItem';

const TaskList = ({ activeTasks, deleteTask, completeTask }) => {
  return activeTasks.length === 0 ? (
    <p className="empty-list-message">No active tasks yet.</p>
  ) : (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </ul>
  );
};
export default TaskList;
