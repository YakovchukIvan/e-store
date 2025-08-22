import { useState } from 'react';

import Footer from '../components/layout/Footer';

import TaskForm from '../components/tasks/TaskForm';
import SortControls from '../components/tasks/SortControls';
import TaskList from '../components/tasks/TaskList';
import CompletedTaskList from '../components/tasks/CompletedTaskList';
import SectionToggleButton from '../components/common/SectionToggleButton';
import ArchiveTaskList from '../components/tasks/ArchiveTaskList';

import { Sections, SortOrder, SortType, Task, TaskFormData } from '../types/type';
import { defaultTasks } from '../data/defaulTasks';
import { sortTask } from '../utils/sortTask';

function Home() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [sortType, setSortType] = useState<SortType>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const [openSection, setOpenSection] = useState<Record<Sections, boolean>>({
    taskList: false,
    tasks: true,
    completedTasks: false,
    archiveTasks: false,
  });

  const toggleSection = (section: Sections) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const addTask = (taskData: TaskFormData) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now(),
      completed: false,
      archived: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id: number) =>
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );

  const toggleArchiveTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, archived: !task.archived } : task)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleSortOrder = (type: SortType): void => {
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
