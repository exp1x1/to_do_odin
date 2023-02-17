export let AllProjects = [];

export const Project = (title) => {
  let allTaskArray = [];
  let obj = { title, allTaskArray };
  AllProjects.push(obj);
  return obj;
};

export const Task = (project, title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes };
};

