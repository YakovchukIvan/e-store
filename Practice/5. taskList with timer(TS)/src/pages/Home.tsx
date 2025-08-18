import Footer from '../components/layout/Footer';
import SectionToggleButton from '../components/common/SectionToggleButton';
import SortControls from '../components/tasks/SortControls';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import CompletedTaskList from '../components/tasks/CompletedTaskList';
import ArchiveTaskList from '../components/tasks/ArchiveTaskList';
import DateTimer from '../components/DateTimer';

import { useTaskManager } from '../hooks/useTaskManager';
import { sortTask } from '../utils/sortTask';
import { isActiveTask, isArchivedTask, isCompletedTask } from '../utils/taskFilters';
import { useSections } from '../hooks/useSections';
import { useDateTime } from '../hooks/useDateTime';
import { useSorting } from '../hooks/useSorting';

function Home() {
  const { tasks, addTask, completeTask, toggleArchiveTask, deleteTask } = useTaskManager();
  const { openSection, toggleSection } = useSections();
  const { dateTimer } = useDateTime();
  const { sortType, sortOrder, toggleSortOrder } = useSorting();

  // Фільтровані та відсортовані списки задач
  const activeTasks = sortTask(tasks.filter(isActiveTask), sortType, sortOrder);
  const completedTasks = sortTask(tasks.filter(isCompletedTask), sortType, sortOrder);
  const archiveTasksList = sortTask(tasks.filter(isArchivedTask), sortType, sortOrder);

  return (
    <div className="app">
      <DateTimer dateTimer={dateTimer} />

      <div className="task-container">
        <h1>Task List with Priority</h1>
        <SectionToggleButton
          openSection={openSection}
          toggleSection={toggleSection}
          section="taskList"
        />
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <SectionToggleButton
          openSection={openSection}
          toggleSection={toggleSection}
          section="tasks"
        />
        <SortControls sortType={sortType} sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
        {openSection.tasks && (
          <TaskList
            activeTasks={activeTasks}
            archiveTask={toggleArchiveTask}
            completeTask={completeTask}
            dateTimer={dateTimer}
          />
        )}
      </div>

      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <SectionToggleButton
          openSection={openSection}
          toggleSection={toggleSection}
          section="completedTasks"
        />
        {openSection.completedTasks && (
          <CompletedTaskList
            completedTasks={completedTasks}
            archiveTask={toggleArchiveTask}
            completeTask={completeTask}
          />
        )}
      </div>

      <div className="completed-task-container">
        <h2>Archive Tasks</h2>
        <SectionToggleButton
          openSection={openSection}
          toggleSection={toggleSection}
          section="archiveTasks"
        />
        {openSection.archiveTasks && (
          <ArchiveTaskList
            archiveTasksList={archiveTasksList}
            archiveTask={toggleArchiveTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
