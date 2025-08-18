interface Task {
  completed: boolean;
  deadline: string;
  id: number;
  priority: string;
  title: string;
  overdue?: boolean;
}

export const defaultTasks: Task[] = [
  {
    completed: false,
    deadline: '2025-09-30T08:34',
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
    overdue: true,
  },
  {
    completed: false,
    deadline: '2025-05-30T20:35',
    id: 1753868113071,
    priority: 'Medium',
    title: 'Прибрати вдома',
    overdue: true,
  },
  {
    completed: false,
    deadline: '2025-08-17T16:35',
    id: 1753868138607,
    priority: 'High',
    title: 'Генеральне прибирання вдома',
  },
];
