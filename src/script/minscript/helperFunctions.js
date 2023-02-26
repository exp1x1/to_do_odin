export const addElement = (parentElement, element, elementClass = "") => {
  const parentNode = document.querySelector(parentElement);

  const childElement = document.createElement(element);
  if (elementClass !== "") {
    childElement.classList.add(elementClass);
  }
  parentNode.appendChild(childElement);

  return childElement;
};

export const addElementByNode = (parentNode, element, elementClass = "") => {
  const childElement = document.createElement(element);
  if (elementClass !== "") {
    childElement.classList.add(elementClass);
  }
  parentNode.appendChild(childElement);

  return childElement;
};

export const clean = (element) => {
  element.replaceChildren("");
};

export const error = (str) => {
  // eslint-disable-next-line no-alert
  alert(str);
};

export const removeClass = (elemeant, classname) => {
  elemeant.classList.remove(classname);
};

export const addClass = (elemeant, classname) => {
  elemeant.classList.add(classname);
};
