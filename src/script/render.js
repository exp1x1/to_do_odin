import {
  addElement,
  addElementByNode,
  clean,
} from "./minscript/helperFunctions";
import Clock from "./minscript/clock";
import addProjectImgSvg from "../../assest/img/addprojectimg.svg";
import edittaskimg from "../../assest/img/edittaskimg.svg";

export const mainPage = (() => {
  const createPageLayout = () => {
    addElement("body", "div").setAttribute("id", "container");

    // navbar
    addElement("#container", "nav");
    // projectbar
    addElement("#container", "div", "projectbar");
    // taskcontainer
    addElement("#container", "div").setAttribute("id", "taskContainer");
  };

  const addElementInNavbar = () => {
    addElement("nav", "div", "clock");
    const addTaskButton = addElement("nav", "div");
    addTaskButton.setAttribute("id", "addTaskBtn");
    addTaskButton.textContent = "+";
  };

  const addTimeToNav = () => {
    const clockContainer = document.querySelector(".clock");
    clockContainer.textContent = Clock.currentTime();
  };

  const renderPage = () => {
    createPageLayout();
    addElementInNavbar();

    setInterval(addTimeToNav, 1000);
  };

  return { renderPage };
})();

export const Projects = (() => {
  document.querySelector(".projectbar");
  const renderButton = () => {
    const node = addElement(".projectbar", "img");
    node.setAttribute("id", "addproject");
    node.src = addProjectImgSvg;
  };

  const renderProjectInputForm = () => {
    const proInputForm = addElement("#container", "div");
    proInputForm.setAttribute("id", "proForm");
    proInputForm.classList.add("hide");

    const projectTitleInput = addElement("#proForm", "input");
    projectTitleInput.setAttribute("id", "protitle");
    projectTitleInput.placeholder = "Project Name";

    const proSumbitBtn = addElement("#proForm", "button");
    proSumbitBtn.setAttribute("id", "proSmBtn");
    proSumbitBtn.textContent = "add";
  };

  const renderTitle = () => {
    addElement(".projectbar", "h1").textContent = "PROJECTS";
  };

  const renderProjectContainer = () => {
    addElement(".projectbar", "div").setAttribute("id", "projectContainer");
  };

  const renderProjectTitle = (arr) => {
    clean(document.querySelector("#projectContainer"));
    arr.forEach((element, index) => {
      const node = addElement("#projectContainer", "div", "project");
      node.textContent = element.title;
      node.setAttribute("project-id", index);
    });
  };

  const render = () => {
    renderTitle();
    renderProjectContainer();
    renderButton();
    renderProjectInputForm();
  };

  return { render, renderProjectTitle };
})();

export const Tasks = (() => {
  const renderTasksContainer = () => {
    addElement("#taskContainer", "div", "taskcontainer");
  };

  const renderTaskInputForm = () => {
    const taskInputForm = addElement("#container", "div");
    taskInputForm.setAttribute("id", "taskForm");
    taskInputForm.classList.add("hide");

    const taskTitleInput = addElement("#taskForm", "input");
    taskTitleInput.setAttribute('id','inputTitle')
    taskTitleInput.placeholder = "Task Title";

    const taskDescriptionInput = addElement("#taskForm", "textarea");
    taskDescriptionInput.setAttribute('id' , 'inputDescription')
    taskDescriptionInput.placeholder = "Task Description";

    const dueDate = addElement("#taskForm", "input");
    dueDate.setAttribute('id','inputDueDate')
    dueDate.type = "date";

    const taskPriority = addElement("#taskForm", "select");
    taskPriority.setAttribute("id", "taskPriority");

    const firstOption = addElement("#taskPriority", "option");
    firstOption.value = "0";
    firstOption.textContent = "low";

    const secondOption = addElement("#taskPriority", "option");
    secondOption.value = "1";
    secondOption.textContent = "med";

    const thirdOption = addElement("#taskPriority", "option");
    thirdOption.value = "2";
    thirdOption.textContent = "high";

    const taskSmBtn = addElement("#taskForm", "button");
    taskSmBtn.setAttribute("id", "taskSmBtn");
    taskSmBtn.textContent = "add Task";
  };

  const renderTaskBox = (
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority
  ) => {
    const node = addElement(".taskcontainer", "div", "task");

    const title = addElementByNode(node, "h1", "title");
    title.textContent = taskTitle;

    const priority = addElementByNode(node, "h2", "priority");
    priority.textContent = taskPriority;

    const description = addElementByNode(node, "p", "description");
    description.textContent = taskDescription;

    const dueDate = addElementByNode(node, "h2", "duedate");
    dueDate.textContent = `Due Date : ${taskDueDate}`;

    const editBtn = addElementByNode(node, "img", "editTaskBtn");
    editBtn.src = edittaskimg;
  };

  const renderTask = (arr) => {
    const taskcontainer = document.querySelector(".taskcontainer");
    clean(taskcontainer);
    arr.allTaskArray.forEach((e) => {
      const { title } = e;
      const { description } = e;
      const { dueDate } = e;
      const { priority } = e;
      renderTaskBox(title, description, dueDate, priority);
    });
  };

  const render = () => {
    renderTasksContainer();
    renderTaskInputForm();
  };

  return { render, renderTask };
})();
