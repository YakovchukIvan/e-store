import { useState } from 'react';

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
      <button type="submit" disabled={!formData.title.trim() || !formData.deadline}>
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
