export const addElement = (parentElement, element, elementClass = "") => {
  const parentNode = document.querySelector(parentElement);

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
  alert(str);
};
