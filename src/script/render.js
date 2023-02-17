import { addElement, clean } from "./minscript/helperFunctions";
import { AllProjects } from "./project";
import Clock from "./minscript/clock";

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
    const node = addElement("nav", "div", "clock");
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

  renderPage();

  return { renderPage };
})();

export const ProjectBar = (() => {
  const probar = document.querySelector(".projectbar");
  const renderButton = () => {
    const node = addElement(".projectbar", "button", "addproject");
    node.textContent = "+";
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

  renderTitle();
  renderProjectContainer();
  renderButton();
  renderProjectInputForm();
})();

export const renderProjectTitle = (arr) => {
  clean(document.querySelector("#projectContainer"));
  arr.forEach((element , index) => {
    const node = addElement("#projectContainer", "div",'project' );
    node.textContent = element.title;
    node.setAttribute('id',index)
  });
};
