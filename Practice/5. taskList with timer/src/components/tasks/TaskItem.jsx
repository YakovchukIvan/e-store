const TaskItem = ({ task, archiveTask, completeTask, deleteTask, isOverdue = false }) => {
  const { title, priority, deadline, id, completed, archived = false } = task;

  const formattedDeadline = new Date(deadline).toLocaleString();

  return (
    <li className={`task-item ${priority.toLowerCase()} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-info">
        <div className={`task-title ${isOverdue ? 'overdue-title' : ''}`}>
          {title} <strong>{priority}</strong>
        </div>
        <div className={`task-deadline ${isOverdue ? 'overdue-deadline' : ''}`}>
          Due: {formattedDeadline}
        </div>
      </div>
      <div className="task-buttons">
        {archived ? (
          <>
            <button className="complete-button" onClick={() => archiveTask(id)}>
              Unarchive
            </button>
            <button className="delete-button" onClick={() => deleteTask(id)}>
              Delete
            </button>
          </>
        ) : (
          <>
            <button className="complete-button" onClick={() => completeTask(id)}>
              {completed ? 'Turn back' : 'Complete'}
            </button>
            <button className="delete-button" onClick={() => archiveTask(id)}>
              Archive
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
