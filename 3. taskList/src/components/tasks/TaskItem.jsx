const TaskItem = ({ task, archiveTask, completeTask, deleteTask }) => {
  const { title, priority, deadline, id, completed, archived = false } = task;
  console.log(task);

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
