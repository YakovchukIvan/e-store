import TaskItem from './TaskItem';

const CompletedTaskList = ({ completedTasks, deleteTask, completeTask }) => {
  return completedTasks.length === 0 ? (
    <p className="empty-list-message">No completed tasks yet.</p>
  ) : (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </ul>
  );
};

export default CompletedTaskList;
