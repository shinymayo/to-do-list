function createDefaultTask() {
    // get the area for the task listings
    const taskListingArea = document.querySelector(".tasks");

    // create the task box/line
    const taskBox = document.createElement("div");
    taskBox.classList.add("task-listing");
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
    // due date
    // priority
    // check

}


export default createDefaultTask;