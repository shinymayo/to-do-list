// some funcs
import _ from "lodash";
// some style
import './style.css';

import createTaskFolders from "./taskFolders";
import createDefaultTask from "./taskExample";
import addNewTask from "./addNewTask";

// function component() {
//   const element = document.createElement("div");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   console.log(Data);
//   console.log(Notes);

//   return element;
// }

// document.body.appendChild(component());

function createPageItems() {
  // main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("page");
  document.body.appendChild(mainDiv);

  // popup form overlay to hide it
  const popupOverlay = document.createElement("div");
  popupOverlay.setAttribute("id", "popupOverlay");
  popupOverlay.classList.add("overlay-container");
  mainDiv.appendChild(popupOverlay);
  // pop up box with form
  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-box");
  popupOverlay.appendChild(popupBox);
  // heading for form
  const popupBoxHeading = document.createElement("h2");
  popupBoxHeading.textContent = "New Task Form";
  popupBoxHeading.style.color = "green";
  popupBox.appendChild(popupBoxHeading);
  // the form itself
  const popupForm = document.createElement("form");
  popupForm.classList.add("form-container");
  popupBox.appendChild(popupForm);
  // ask for title
  const taskTitleLabel = document.createElement("label");
  taskTitleLabel.setAttribute("for", "title");
  taskTitleLabel.classList.add("form-label");
  taskTitleLabel.textContent = "Title:";
  popupForm.appendChild(taskTitleLabel);
  // input field for title
  const taskTitleInput = document.createElement("input");
  taskTitleInput.classList.add("form-input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("placeholder", "Type title here");
  taskTitleInput.setAttribute("id", "title");
  taskTitleInput.setAttribute("name", "title");
  popupForm.appendChild(taskTitleInput);
  // const taskDescription
  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.setAttribute("for", "description");
  taskDescriptionLabel.classList.add("form-label");
  taskDescriptionLabel.textContent = "Description:";
  popupForm.appendChild(taskDescriptionLabel);
  // input field for description
  const taskDescriptionTextArea = document.createElement("textarea");
  taskDescriptionTextArea.classList.add("form-input");
  taskDescriptionTextArea.setAttribute("rows", "10");
  taskDescriptionTextArea.setAttribute("cols", "30");
  taskDescriptionTextArea.setAttribute("id", "description");
  taskDescriptionTextArea.setAttribute("name", "description");
  popupForm.appendChild(taskDescriptionTextArea);
  // const taskDueDate
  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.setAttribute("for", "due-date");
  taskDueDateLabel.classList.add("form-label");
  taskDueDateLabel.textContent = "Due Date:";
  popupForm.appendChild(taskDueDateLabel);
  // input field for due date
  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.classList.add("form-input");
  taskDueDateInput.setAttribute("type", "datetime-local");
  taskDueDateInput.setAttribute("id", "due-date");
  taskDueDateInput.setAttribute("name", "due-date");
  popupForm.appendChild(taskDueDateInput);
  // const taskPriority
  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.setAttribute("for", "priority-picker");
  taskPriorityLabel.classList.add("form-label");
  taskPriorityLabel.textContent = "Choose priority:";
  popupForm.appendChild(taskPriorityLabel);
  // task priority input low
  const taskPriorityInputLow = document.createElement("input");
  taskPriorityInputLow.classList.add("form-input");
  taskPriorityInputLow.classList.add("priority-low");
  taskPriorityInputLow.setAttribute("type", "radio");
  taskPriorityInputLow.setAttribute("value", "low");
  taskPriorityInputLow.setAttribute("id", "priority-picker");
  popupForm.appendChild(taskPriorityInputLow);
  // task priority input medium
  const taskPriorityInputMedium = document.createElement("input");
  taskPriorityInputMedium.classList.add("form-input");
  taskPriorityInputMedium.classList.add("priority-medium");
  taskPriorityInputMedium.setAttribute("type", "radio");
  taskPriorityInputMedium.setAttribute("value", "medium");
  taskPriorityInputMedium.setAttribute("id", "priority-picker");
  popupForm.appendChild(taskPriorityInputMedium);
  // task priority input high
  const taskPriorityInputHigh = document.createElement("input");
  taskPriorityInputHigh.classList.add("form-input");
  taskPriorityInputHigh.classList.add("priority-high");
  taskPriorityInputHigh.setAttribute("type", "radio");
  taskPriorityInputHigh.setAttribute("value", "high");
  taskPriorityInputHigh.setAttribute("id", "priority-picker");
  popupForm.appendChild(taskPriorityInputHigh);
  // const submit button
  const taskSubmitButton = document.createElement("button");
  taskSubmitButton.setAttribute("type", "submit");
  taskSubmitButton.setAttribute("id", "button-submit");
  taskSubmitButton.textContent = "DONE";
  taskSubmitButton.addEventListener("click", addNewTask);
  popupForm.appendChild(taskSubmitButton);
  // top div
  const topDiv = document.createElement("div");
  topDiv.classList.add("top");
  topDiv.textContent = "To Do List";
  mainDiv.appendChild(topDiv);

  // add new button
  const addNewButton = document.createElement("button");
  addNewButton.classList.add("add-new-button");
  addNewButton.textContent = "ADD TASK";
  addNewButton.addEventListener("click", addNewTask);
  topDiv.appendChild(addNewButton);

  // side div
  const sideDiv = document.createElement("div");
  sideDiv.classList.add("side");
  // sideDiv.textContent = "Projects";
  mainDiv.appendChild(sideDiv);
  createTaskFolders();

  //  tasks div
  const tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  mainDiv.appendChild(tasksDiv);
  createDefaultTask();
}

document.body.appendChild(createPageItems());