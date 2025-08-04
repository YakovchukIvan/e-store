import { useState } from 'react';

import Footer from '../components/layout/Footer';

import SectionToggleButton from '../components/common/SectionToggleButton';
import TaskForm from '../components/tasks/TaskForm';
import SortControls from '../components/tasks/SortControls';
import TaskList from '../components/tasks/TaskList';
import CompletedTaskList from '../components/tasks/CompletedTaskList';

import { defaulTasks } from '../data/defaulTasks';
import { sortTask } from '../utils/sortTask';

function Home() {
  const [tasks, setTasks] = useState(defaulTasks);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const [openSection, setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completedTasks: true,
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
    tasks.filter((task) => !task.completed),
    sortType,
    sortOrder,
  );
  const completedTasks = sortTask(
    tasks.filter((task) => task.completed),
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
          <TaskList activeTasks={activeTasks} deleteTask={deleteTask} completeTask={completeTask} />
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
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
