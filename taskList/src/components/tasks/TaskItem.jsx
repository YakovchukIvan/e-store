const TaskItem = ({ task, deleteTask, completeTask }) => {
  const { title, priority, deadline, id, completed } = task;
  const formattedDeadline = new Date(deadline).toLocaleString();

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">Due: {formattedDeadline}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button" onClick={() => completeTask(id)}>
          {completed ? 'Turn back' : 'Complete'}
        </button>
        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
