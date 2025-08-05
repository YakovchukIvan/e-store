import { useState } from 'react';

import Footer from '../components/layout/Footer';

import SectionToggleButton from '../components/common/SectionToggleButton';
import TaskForm from '../components/tasks/TaskForm';
import SortControls from '../components/tasks/SortControls';
import TaskList from '../components/tasks/TaskList';
import CompletedTaskList from '../components/tasks/CompletedTaskList';

import { defaulTasks } from '../data/defaulTasks';
import { sortTask } from '../utils/sortTask';
import ArchiveTaskList from '../components/tasks/ArchiveTaskList';

function Home() {
  const [tasks, setTasks] = useState(defaulTasks);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const [openSection, setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completedTasks: false,
    archiveTasks: false,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  };

  const completeTask = (id) =>
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );

  const toggleArchiveTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, archived: !task.archived } : task)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleSortOrder = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const activeTasks = sortTask(
    tasks.filter((task) => !task.completed && !task.archived),
    sortType,
    sortOrder,
  );

  const completedTasks = sortTask(
    tasks.filter((task) => task.completed && !task.archived),
    sortType,
    sortOrder,
  );

  const archiveTasksList = sortTask(
    tasks.filter((task) => task.archived),
    sortType,
    sortOrder,
  );

  return (
    <div className="app">
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
