import TaskListWrapper from './TaskListWrapper';

const CompletedTaskList = ({ completedTasks, archiveTask, completeTask }) => (
  <TaskListWrapper
    tasks={completedTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    emptyMessage="No completed tasks yet."
    listClassName="completed-task-list"
  />
);

export default CompletedTaskList;
