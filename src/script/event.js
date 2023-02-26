import { Project, AllProjects, Task } from "./project";
import { Projects, Tasks } from "./render";
import {
  addClass,
  clean,
  error,
  removeClass,
} from "./minscript/helperFunctions";

let currentProjectIndex = 0;
export const makeProject = (title) => {
  Project(title);
  Projects.renderProjectTitle(AllProjects);
  // addingEventLisners.projectSelected()
};

export const addTask = (index, title, description, dueDate, priority) => {
  Task(index, title, description, dueDate, priority);
  Tasks.renderTask(AllProjects[index]);
};

export const addingEventLisners = (() => {
  let proInputForm;
  let taskForm;
  // let addProBtn;
  // let proInputSmBtn;
  // let proInput;
  // let procontainer;
  // let addTaskBtn;
  // let addInputTaskBtn;

  const initVar = () => {
    proInputForm = document.querySelector("#proForm");
    taskForm = document.querySelector("#taskForm");
  };

  const projectSelected = () => {
    const procontainer = document.querySelector("#projectContainer");

    procontainer.addEventListener("click", (e) => {
      currentProjectIndex = e.target.getAttribute("project-id");
      Tasks.renderTask(AllProjects[currentProjectIndex]);
    });
  };

  const projectInputFormPopup = () => {
    const addProBtn = document.querySelector("#addproject");

    addProBtn.addEventListener("click", () => {
      removeClass(proInputForm, "hide");
    });
  };

  const projectInputFormSumbit = () => {
    const proInputSmBtn = document.querySelector("#proSmBtn");
    const proInput = document.querySelector("#protitle");

    proInputSmBtn.addEventListener("click", () => {
      makeProject(proInput.value);
      proInput.value = "";
      addClass(proInputForm, "hide");
    });
  };

  const taskInputFormPopup = () => {
    const addTaskBtn = document.querySelector("#addTaskBtn");

    addTaskBtn.addEventListener("click", () => {
      removeClass(taskForm, "hide");
    });
  };

  const taskInputFormSumbit = () => {
    const addInputTaskBtn = document.querySelector("#taskSmBtn");

    addInputTaskBtn.addEventListener("click", () => {
      addClass(taskForm, "hide");
      if (AllProjects.length === 0) {
        error("no project , add projects");
        return;
      }
      const title = document.querySelector("#inputTitle");
      const description = document.querySelector("#inputDescription");
      const dueDate = document.querySelector("#inputDueDate");
      const priority = document.querySelector("#taskPriority");

      addTask(
        currentProjectIndex,
        title.value,
        description.value,
        dueDate.value,
        priority.value
      );

      title.value = "";
      description.value = "";
      dueDate.value = "";

      addClass(taskForm, "hide");
    });
  };
  const start = () => {
    initVar();
    projectInputFormPopup();
    projectInputFormSumbit();
    taskInputFormPopup();
    taskInputFormSumbit();
    projectSelected();
  };

  return { start };
})();
