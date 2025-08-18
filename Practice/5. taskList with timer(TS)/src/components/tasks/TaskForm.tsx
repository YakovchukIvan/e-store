import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { TaskFormData } from '../../types';

interface TaskFormProps {
  addTask: (task: TaskFormData) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Low',
    deadline: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
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
