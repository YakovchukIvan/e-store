import TaskListWrapper from './TaskListWrapper';

const TaskList = ({ activeTasks, archiveTask, completeTask }) => (
  <TaskListWrapper
    tasks={activeTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    emptyMessage="No active tasks yet."
    listClassName="task-list"
  />
);

export default TaskList;
