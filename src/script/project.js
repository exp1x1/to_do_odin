export const AllProjects = [];

export const Project = (title) => {
  const allTaskArray = [];
  const obj = { title, allTaskArray };
  AllProjects.push(obj);
  return obj;
};

export const Task = (
  ProjectIndex,
  title,
  description,
  dueDate,
  priority
) => {
  const obj = {
    title,
    description,
    dueDate,
    priority,
  };
  AllProjects[ProjectIndex].allTaskArray.push(obj);
  return obj;
};

