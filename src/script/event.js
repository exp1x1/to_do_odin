import { Project, Task } from "./project";
import { AllProjects } from "./project";
import { renderProjectTitle } from "./render";

const removeClass = (elemeant, classname) => {
  elemeant.classList.remove(classname);
};

const addClass = (elemeant, classname) => {
  elemeant.classList.add(classname);
};

export  const makeProject = (title) => {
  const project = Project(title);
  renderProjectTitle(AllProjects);
};


export const addingEventLisners = (() => {
  const addProBtn = document.querySelector(".addproject");
  const proInputForm = document.querySelector("#proForm");
  const proInputSmBtn = document.querySelector("#proSmBtn");
  
  const projectInputFormPopup = () => {
    addProBtn.addEventListener("click", () => {
      removeClass(proInputForm, "hide");
    });
  };

  const projectInputFormSumbit = () => {
    const proInput = document.querySelector("#protitle");
    proInputSmBtn.addEventListener("click", () => {
      makeProject(proInput.value);
      proInput.value = "";
      addClass(proInputForm, "hide");
      
      console.log(AllProjects);
    });
  };

  projectInputFormPopup();
  projectInputFormSumbit();
})();
