import "./css/reset.css";
import "./css/style.css";
// DOM
import { mainPage, Projects, Tasks } from "./script/render";
// scripts

import { addingEventLisners, makeProject, addTask } from "./script/event";
import { Task, AllProjects } from "./script/project";

mainPage.renderPage();
Projects.render();
Tasks.render();
addingEventLisners.start();


