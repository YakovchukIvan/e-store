// Рефакторинг коду. Використовуйте Context API замість прокидання пропсів .

import { FormEvent, useEffect, useState } from 'react';
import { IOpenSection, TPriority, ITask, ITaskItemProps } from './types';
import { MyContext, useTasks } from './useTasksContext';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [sortType, setSortType] = useState<'date' | 'priority'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [openSection, setOpenSection] = useState<IOpenSection>({
    taskList: false,
    tasks: true,
    completedTasks: true,
  });
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function toggleSection(section: keyof IOpenSection) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function addTask(task: Omit<ITask, 'id' | 'completed'>) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completeTask(id: number) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
  }

  function sortTask(tasks: ITask[]): ITask[] {
    return tasks.slice().sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder: Record<TPriority, number> = {
          High: 1,
          Medium: 2,
          Low: 3,
        };
        return sortOrder === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === 'asc'
          ? new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          : new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      }
    });
  }

  function toggleSortOrder(type: 'date' | 'priority') {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  }

  const activeTasks = sortTask(tasks.filter((task) => !task.completed));
  const completedTasks = sortTask(tasks.filter((task) => task.completed));

  return (
    <MyContext.Provider
      value={{ addTask, completeTask, deleteTask, activeTasks, completedTasks, currentTime }}
    >
      <div className="app">
        <div className="task-container">
          <h1>Task List with Priority</h1>
          <button
            className={`close-button ${openSection.taskList ? 'open' : ''}`}
            onClick={() => toggleSection('taskList')}
          >
            +
          </button>
          {openSection.taskList && <TaskForm />}
        </div>
        <div className="task-container">
          <h2>Tasks</h2>
          <button
            className={`close-button ${openSection.tasks ? 'open' : ''}`}
            onClick={() => toggleSection('tasks')}
          >
            +
          </button>
          <div className="sort-controls">
            <button
              className={`sort-button ${sortType === 'date' ? 'active' : ''}`}
              onClick={() => toggleSortOrder('date')}
            >
              By Date {sortType === 'date' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
            </button>
            <button
              className={`sort-button ${sortType === 'priority' ? 'active' : ''}`}
              onClick={() => toggleSortOrder('priority')}
            >
              By Priority {sortType === 'priority' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
            </button>
          </div>
          {openSection.tasks && <TaskList />}
        </div>
        <div className="completed-task-container">
          <h2>Completed Task</h2>
          <button
            className={`close-button ${openSection.completedTasks ? 'open' : ''}`}
            onClick={() => toggleSection('completedTasks')}
          >
            +
          </button>
          {openSection.completedTasks && <CompletedTaskList />}
        </div>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Low');
  const [deadline, setDeadline] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title.trim() && deadline) {
      addTask({ title, priority, deadline });
      setTitle('');
      setPriority('Low');
      setDeadline('');
    }
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Task title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="datetime-local"
        required
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function TaskList() {
  const { activeTasks, deleteTask, completeTask, currentTime } = useTasks();

  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
          key={task.id}
          isOverdue={new Date(task.deadline) < currentTime}
        />
      ))}
    </ul>
  );
}

function CompletedTaskList() {
  const { completedTasks, deleteTask } = useTasks();

  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

function TaskItem({ task, deleteTask, completeTask, isOverdue }: ITaskItemProps) {
  const { title, priority, deadline, id, completed } = task;

  return (
    <li className={`task-item ${priority.toLowerCase()} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">Due: {new Date(deadline).toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        {!completed && (
          <button className="complete-button" onClick={() => completeTask?.(id)}>
            Complete
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useEffect, useState, component
        composition, conditional rendering, array methods (map, filter), event handling.
      </p>
    </footer>
  );
}

export default App;
