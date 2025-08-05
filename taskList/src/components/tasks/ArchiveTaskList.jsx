import TaskListWrapper from './TaskListWrapper';

const ArchiveTaskList = ({ archiveTasksList, archiveTask, completeTask, deleteTask }) => (
  <TaskListWrapper
    tasks={archiveTasksList}
    archiveTask={archiveTask}
    completeTask={completeTask}
    deleteTask={deleteTask}
    emptyMessage="No archived tasks yet."
    listClassName="archive-task-list"
  />
);
export default ArchiveTaskList;
