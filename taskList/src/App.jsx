import { useState } from 'react';

const defaulTask = [
  {
    completed: false,
    deadline: '2025-07-30T08:34',
    id: 1753868092248,
    priority: 'Low',
    title: 'Купити продукти в АТБ',
  },
  {
    completed: false,
    deadline: '2025-06-30T12:35',
    id: 1753868102919,
    priority: 'Low',
    title: 'Приготовити вечерю',
  },
  {
    completed: false,
    deadline: '2025-05-30T20:35',
    id: 1753868113071,
    priority: 'Medium',
    title: 'Прибрати вдома',
  },
  {
    completed: false,
    deadline: '2025-08-02T16:35',
    id: 1753868138607,
    priority: 'High',
    title: 'Генеральне прибирання вдома',
  },
];

function App() {
  const [tasks, setTasks] = useState(defaulTask);
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

  const completeTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const sortTask = (tasks) => {
    return tasks.slice().sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === 'asc'
          ? new Date(a.deadline) - new Date(b.deadline)
          : new Date(b.deadline) - new Date(a.deadline);
      }
    });
  };

  const toggleSortOrder = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const activeTasks = sortTask(tasks.filter((task) => !task.completed));
  const comptedTasks = sortTask(tasks.filter((task) => task.completed));

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          onClick={() => toggleSection('taskList')}
          className={`close-button ${openSection.taskList ? 'open' : ''} `}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          onClick={() => toggleSection('tasks')}
          className={`close-button ${openSection.taskList ? 'open' : ''} `}
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
        {openSection.tasks && (
          <TaskList activeTasks={activeTasks} deleteTask={deleteTask} completeTask={completeTask} />
        )}
      </div>

      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button
          onClick={() => toggleSection('completedTasks')}
          className={`close-button ${openSection.taskList ? 'open' : ''} `}
        >
          +
        </button>
        {openSection.completedTasks && (
          <CompletedTaskList comptedTasks={comptedTasks} deleteTask={deleteTask} />
        )}
      </div>

      <Footer />
    </div>
  );
}

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Low',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, deadline } = formData;

    if (title.trim() && deadline) {
      addTask(formData);
      setFormData({ title: '', priority: 'Low', deadline: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Task title"
        required
        onChange={handleChange}
      />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="datetime-local"
        name="deadline"
        required
        value={formData.deadline}
        onChange={handleChange}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

const TaskList = ({ activeTasks, deleteTask, completeTask }) => {
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </ul>
  );
};

const TaskItem = ({ task, deleteTask, completeTask }) => {
  const { title, priority, deadline, id, completed } = task;

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">Due: {new Date(deadline).toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        {!completed && (
          <button className="complete-button" onClick={() => completeTask(id)}>
            Complete
          </button>
        )}
        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

const CompletedTaskList = ({ comptedTasks, deleteTask }) => {
  return (
    <ul className="completed-task-list">
      {comptedTasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: <strong>React</strong>, <strong>JSX</strong>,
        <strong> props</strong>,<strong> useState</strong>, component composition, conditional
        rendering, array methods <strong>(map, filter)</strong>, event handling
      </p>
    </footer>
  );
};
export default App;
