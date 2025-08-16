import TaskListWrapper from './TaskListWrapper';

const TaskList = ({ activeTasks, archiveTask, completeTask, dateTimer }) => (
  <TaskListWrapper
    tasks={activeTasks}
    archiveTask={archiveTask}
    completeTask={completeTask}
    dateTimer={dateTimer}
    emptyMessage="No active tasks yet."
    listClassName="task-list"
  />
);

export default TaskList;
