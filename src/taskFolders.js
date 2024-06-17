function createTaskFolders() {
    //select the side bar div
    const sidebar = document.querySelector(".side");
    //Home
    const home = document.createElement("div");
    home.textContent = "Home";
    home.classList.add("sidebar-task-folder");
    sidebar.appendChild(home);
    //today
    const today = document.createElement("div");
    today.textContent = "Today";
    today.classList.add("sidebar-task-folder");
    sidebar.appendChild(today);
    //next 7 days
    const sevenDays = document.createElement("div");
    sevenDays.textContent = "7 days";
    sevenDays.classList.add("sidebar-task-folder");
    sidebar.appendChild(sevenDays);
    // projects
    const projects = document.createElement("div");
    projects.textContent = "Projects";
    projects.classList.add("sidebar-task-folder");
    sidebar.appendChild(projects);



    // mini projects 
    const booksProject = document.createElement("div");
    booksProject.textContent = "Books";
    booksProject.classList.add("mini-sidebar-task-folder");
    sidebar.appendChild(booksProject);

    const workoutProject = document.createElement("div");
    workoutProject.textContent = "Workout";
    workoutProject.classList.add("mini-sidebar-task-folder");
    sidebar.appendChild(workoutProject);

    const houseProject = document.createElement("div");
    houseProject.textContent = "House";
    houseProject.classList.add("mini-sidebar-task-folder");
    sidebar.appendChild(houseProject);

    const randomProjects = document.createElement("div");
    randomProjects.textContent = "Random";
    randomProjects.classList.add("mini-sidebar-task-folder");
    sidebar.appendChild(randomProjects);
}

export default createTaskFolders;