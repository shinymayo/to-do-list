import Delete from "./delete.svg";
import Edit from "./edit.svg";

function createDefaultTask() {
    // get the area for the task listings
    const taskListingArea = document.querySelector(".tasks");

    // create the task box/line
    const taskBox = document.createElement("div");
    taskBox.classList.add("task-listing");
    taskBox.classList.add("priority-medium");
    taskListingArea.appendChild(taskBox);
    // title
    const title = document.createElement("p");
    title.textContent = "do the dishes";
    title.classList.add("task-listing-title");
    taskBox.appendChild(title);
    // description
    const description = document.createElement("p");
    description.textContent = "kitchen, after dinner";
    description.classList.add("task-listing-description");
    taskBox.appendChild(description);


    //create div for icons and edits
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon-div");
    taskBox.appendChild(iconDiv);
    // due date
    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    dueDate.textContent = "15th Jul";
    iconDiv.appendChild(dueDate);
    // priority -- will be done at creation
    // check
    const completionCheck = document.createElement("input");
    completionCheck.setAttribute("type", "checkbox");
    completionCheck.setAttribute("id", "checkbox");
    iconDiv.appendChild(completionCheck);
    // create delete icon 
    const editIcon = new Image();
    editIcon.src = Edit;
    iconDiv.appendChild(editIcon);
    // create edit icon
    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    iconDiv.appendChild(deleteIcon);
}


export default createDefaultTask;