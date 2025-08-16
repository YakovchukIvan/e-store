type Sections = {
  taskList: boolean;
  tasks: boolean;
  completedTasks: boolean;
  archiveTasks: boolean;
};

export const INITIAL_SECTIONS: Sections = {
  taskList: false,
  tasks: true,
  completedTasks: false,
  archiveTasks: false,
};
